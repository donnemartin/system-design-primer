from abc import ABCMeta, abstractmethod
from enum import Enum
from typing import List, Optional


class VehicleSize(Enum):
    """Possible vehicle sizes."""
    MOTORCYCLE = 0
    COMPACT = 1
    LARGE = 2


class Vehicle(metaclass=ABCMeta):
    """Abstract base class for vehicles."""

    def __init__(self, vehicle_size: VehicleSize, license_plate: str, spot_size: int) -> None:
        self.vehicle_size: VehicleSize = vehicle_size
        self.license_plate: str = license_plate
        self.spot_size: int = spot_size
        self.spots_taken: List['ParkingSpot'] = []

    def clear_spots(self) -> None:
        """Remove vehicle from all parking spots."""
        for spot in self.spots_taken:
            spot.remove_vehicle()
        self.spots_taken = []

    def take_spot(self, spot: 'ParkingSpot') -> None:
        """Record that vehicle is occupying a spot."""
        self.spots_taken.append(spot)

    @abstractmethod
    def can_fit_in_spot(self, spot: 'ParkingSpot') -> bool:
        """Check if vehicle can fit in the given spot."""
        pass


class Motorcycle(Vehicle):
    """Motorcycle vehicle - fits in one spot."""

    def __init__(self, license_plate: str) -> None:
        super(Motorcycle, self).__init__(VehicleSize.MOTORCYCLE, license_plate, spot_size=1)

    def can_fit_in_spot(self, spot: 'ParkingSpot') -> bool:
        """Motorcycles can fit in any spot."""
        return True


class Car(Vehicle):
    """Car vehicle - fits in compact or large spots."""

    def __init__(self, license_plate: str) -> None:
        super(Car, self).__init__(VehicleSize.COMPACT, license_plate, spot_size=1)

    def can_fit_in_spot(self, spot: 'ParkingSpot') -> bool:
        """Cars can fit in compact or large spots."""
        return spot.vehicle_size in (VehicleSize.LARGE, VehicleSize.COMPACT)


class Bus(Vehicle):
    """Bus vehicle - only fits in large spots, requires 5 spots."""

    def __init__(self, license_plate: str) -> None:
        super(Bus, self).__init__(VehicleSize.LARGE, license_plate, spot_size=5)

    def can_fit_in_spot(self, spot: 'ParkingSpot') -> bool:
        """Buses can only fit in large spots."""
        return spot.vehicle_size == VehicleSize.LARGE


class ParkingLot(object):
    """Main parking lot with multiple levels."""

    def __init__(self, num_levels: int) -> None:
        self.num_levels: int = num_levels
        self.levels: List['Level'] = []

    def park_vehicle(self, vehicle: Vehicle) -> bool:
        """Park a vehicle in the lot. Returns True if successful."""
        for level in self.levels:
            if level.park_vehicle(vehicle):
                return True
        return False


class Level(object):
    """Single level in a parking lot."""

    SPOTS_PER_ROW: int = 10

    def __init__(self, floor: int, total_spots: int) -> None:
        self.floor: int = floor
        self.num_spots: int = total_spots
        self.available_spots: int = 0
        self.spots: List['ParkingSpot'] = []

    def spot_freed(self) -> None:
        """Increment available spots count."""
        self.available_spots += 1

    def park_vehicle(self, vehicle: Vehicle) -> Optional['ParkingSpot']:
        """Attempt to park vehicle on this level."""
        spot: Optional['ParkingSpot'] = self._find_available_spot(vehicle)
        if spot is None:
            return None
        else:
            spot.park_vehicle(vehicle)
            return spot

    def _find_available_spot(self, vehicle: Vehicle) -> Optional['ParkingSpot']:
        """Find an available spot where vehicle can fit, or return None"""
        spots_needed: int = vehicle.spot_size
        available_row: Optional[int] = None
        spot_number: int = 0
        
        for spot in self.spots:
            if spot.can_fit_vehicle(vehicle):
                if available_row != spot.row:
                    spot_number = spot.spot_number
                    available_row = spot.row
                
                if spot.spot_number == spot_number and spot.can_fit_vehicle(vehicle):
                    spot_number += 1
                    if spot_number - self.spots[len(self.spots) - 1].spot_number == spots_needed:
                        return spot
        
        return None

    def _park_starting_at_spot(self, spot: 'ParkingSpot', vehicle: Vehicle) -> None:
        """Occupy starting at spot.spot_number to vehicle.spot_size."""
        for i in range(vehicle.spot_size):
            parking_spot: 'ParkingSpot' = self.spots[spot.spot_number + i]
            parking_spot.park_vehicle(vehicle)
            vehicle.take_spot(parking_spot)


class ParkingSpot(object):
    """Individual parking spot."""

    def __init__(self, level: Level, row: int, spot_number: int, spot_size: int, 
                 vehicle_size: VehicleSize) -> None:
        self.level: Level = level
        self.row: int = row
        self.spot_number: int = spot_number
        self.spot_size: int = spot_size
        self.vehicle_size: VehicleSize = vehicle_size
        self.vehicle: Optional[Vehicle] = None

    def is_available(self) -> bool:
        """Check if spot is available."""
        return True if self.vehicle is None else False

    def can_fit_vehicle(self, vehicle: Vehicle) -> bool:
        """Check if vehicle can fit in this spot."""
        if self.vehicle is not None:
            return False
        return vehicle.can_fit_in_spot(self)

    def park_vehicle(self, vehicle: Vehicle) -> None:
        """Park a vehicle in this spot."""
        vehicle.take_spot(self)
        self.vehicle = vehicle
        self.level.available_spots -= 1

    def remove_vehicle(self) -> None:
        """Remove vehicle from this spot."""
        self.level.spot_freed()
        self.vehicle = None
