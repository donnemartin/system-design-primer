from abc import ABCMeta, abstractmethod
from enum import Enum


class VehicleSize(Enum):

    MOTORCYCLE = 0
    COMPACT = 1
    LARGE = 2


class Vehicle(metaclass=ABCMeta):

    def __init__(self, vehicle_size, license_plate, spot_size):
        self.vehicle_size = vehicle_size
        self.license_plate = license_plate
        self.spot_size = spot_size
        self.spots_taken = []

    def clear_spots(self):
        for spot in self.spots_taken:
            spot.remove_vehicle(self)
        self.spots_taken = []

    def take_spot(self, spot):
        self.spots_taken.append(spot)

    @abstractmethod
    def can_fit_in_spot(self, spot):
        pass


class Motorcycle(Vehicle):

    def __init__(self, license_plate):
        super(Motorcycle, self).__init__(VehicleSize.MOTORCYCLE, license_plate, spot_size=1)

    def can_fit_in_spot(self, spot):
        return True


class Car(Vehicle):

    def __init__(self, license_plate):
        super(Car, self).__init__(VehicleSize.COMPACT, license_plate, spot_size=1)

    def can_fit_in_spot(self, spot):
        return spot.size in (VehicleSize.LARGE, VehicleSize.COMPACT)


class Bus(Vehicle):

    def __init__(self, license_plate):
        super(Bus, self).__init__(VehicleSize.LARGE, license_plate, spot_size=5)

    def can_fit_in_spot(self, spot):
        return spot.size == VehicleSize.LARGE


class ParkingLot(object):

    def __init__(self, num_levels):
        self.num_levels = num_levels
        self.levels = []  # List of Levels

    def park_vehicle(self, vehicle):
        for level in self.levels:
            if level.park_vehicle(vehicle):
                return True
        return False


class Level(object):

    SPOTS_PER_ROW = 10

    def __init__(self, floor, total_spots):
        self.floor = floor
        self.num_spots = total_spots
        self.available_spots = total_spots
        self.spots = [ParkingSpot(self, 0, spot_number, 1, VehicleSize.COMPACT)
                      for spot_number in range(total_spots)]  # List of ParkingSpots

    def spot_freed(self):
        self.available_spots += 1

    def park_vehicle(self, vehicle):
        spot = self._find_available_spot(vehicle)
        if spot is None:
            return None
        else:
            spot.park_vehicle(vehicle)
            return spot

    def _find_available_spot(self, vehicle):
        """Find an available spot where vehicle can fit, or return None"""
        if not self.spots:
            return None
        spot_size = vehicle.spot_size
        for index in range(len(self.spots) - spot_size + 1):
            contiguous = self.spots[index:index + spot_size]
            if all(spot.is_available() and spot.can_fit_vehicle(vehicle) for spot in contiguous):
                return contiguous[0]
        return None

    def _park_starting_at_spot(self, spot, vehicle):
        """Occupy starting at spot.spot_number to vehicle.spot_size."""
        for parking_spot in self.spots:
            if parking_spot.spot_number >= spot.spot_number and parking_spot.spot_number < spot.spot_number + vehicle.spot_size:
                parking_spot.park_vehicle(vehicle)


class ParkingSpot(object):

    def __init__(self, level, row, spot_number, spot_size, vehicle_size):
        self.level = level
        self.row = row
        self.spot_number = spot_number
        self.spot_size = spot_size
        self.vehicle_size = vehicle_size
        self.size = vehicle_size
        self.vehicle = None

    def is_available(self):
        return True if self.vehicle is None else False

    def can_fit_vehicle(self, vehicle):
        if self.vehicle is not None:
            return False
        return vehicle.can_fit_in_spot(self)

    def park_vehicle(self, vehicle):
        self.vehicle = vehicle
        vehicle.take_spot(self)
        if self.level is not None:
            self.level.available_spots -= 1
        return self

    def remove_vehicle(self, vehicle=None):
        if vehicle is not None and self.vehicle is not vehicle:
            return False
        if self.vehicle is not None:
            self.vehicle.spots_taken = [spot for spot in self.vehicle.spots_taken if spot is not self]
            self.vehicle = None
        if self.level is not None:
            self.level.spot_freed()
        return True
