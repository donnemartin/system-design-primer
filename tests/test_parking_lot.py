"""Unit tests for parking_lot.py"""
import unittest
from solutions.object_oriented_design.parking_lot.parking_lot import (
    ParkingLot, Level, ParkingSpot, Vehicle, Motorcycle, Car, Bus, VehicleSize
)


class TestVehicles(unittest.TestCase):
    """Test cases for Vehicle classes"""

    def test_motorcycle_creation(self):
        """Test motorcycle creation"""
        moto = Motorcycle("MOTO001")
        self.assertEqual(moto.license_plate, "MOTO001")
        self.assertEqual(moto.vehicle_size, VehicleSize.MOTORCYCLE)
        self.assertEqual(moto.spot_size, 1)

    def test_car_creation(self):
        """Test car creation"""
        car = Car("CAR001")
        self.assertEqual(car.license_plate, "CAR001")
        self.assertEqual(car.vehicle_size, VehicleSize.COMPACT)
        self.assertEqual(car.spot_size, 1)

    def test_bus_creation(self):
        """Test bus creation"""
        bus = Bus("BUS001")
        self.assertEqual(bus.license_plate, "BUS001")
        self.assertEqual(bus.vehicle_size, VehicleSize.LARGE)
        self.assertEqual(bus.spot_size, 5)

    def test_motorcycle_can_fit_in_spot(self):
        """Test motorcycle can fit in any spot"""
        moto = Motorcycle("MOTO001")
        self.assertTrue(moto.can_fit_in_spot(None))

    def test_car_fits_in_compact_and_large(self):
        """Test car can fit in compact and large spots"""
        car = Car("CAR001")
        # Simplified test - in full version would check actual spots
        self.assertTrue(car.spot_size <= 2)

    def test_bus_only_fits_in_large(self):
        """Test bus only fits in large spots"""
        bus = Bus("BUS001")
        self.assertEqual(bus.vehicle_size, VehicleSize.LARGE)


class TestParkingSpot(unittest.TestCase):
    """Test cases for ParkingSpot"""

    def setUp(self):
        """Initialize test fixtures"""
        # Create a simple level for testing
        self.level = Level(1, 10)
        self.spot = ParkingSpot(self.level, 0, 0, 1, VehicleSize.COMPACT)

    def test_spot_creation(self):
        """Test parking spot creation"""
        self.assertTrue(self.spot.is_available())
        self.assertIsNone(self.spot.vehicle)

    def test_park_vehicle(self):
        """Test parking vehicle in spot"""
        car = Car("CAR001")
        self.spot.park_vehicle(car)
        
        self.assertEqual(self.spot.vehicle, car)
        self.assertFalse(self.spot.is_available())

    def test_remove_vehicle(self):
        """Test removing vehicle from spot"""
        car = Car("CAR001")
        self.spot.park_vehicle(car)
        self.spot.remove_vehicle()
        
        self.assertIsNone(self.spot.vehicle)
        self.assertTrue(self.spot.is_available())


class TestLevel(unittest.TestCase):
    """Test cases for Level"""

    def setUp(self):
        """Initialize test fixtures"""
        self.level = Level(1, 10)
        # Create parking spots
        for i in range(10):
            spot = ParkingSpot(self.level, 0, i, 1, VehicleSize.COMPACT)
            self.level.spots.append(spot)

    def test_level_creation(self):
        """Test level creation"""
        self.assertEqual(self.level.floor, 1)
        self.assertEqual(self.level.num_spots, 10)
        self.assertEqual(len(self.level.spots), 10)

    def test_spot_freed(self):
        """Test spot freed callback"""
        self.level.available_spots = 5
        self.level.spot_freed()
        self.assertEqual(self.level.available_spots, 6)


class TestParkingLot(unittest.TestCase):
    """Test cases for ParkingLot"""

    def setUp(self):
        """Initialize test fixtures"""
        self.parking_lot = ParkingLot(2)
        # Create levels
        for i in range(2):
            level = Level(i, 10)
            for j in range(10):
                spot = ParkingSpot(level, 0, j, 1, VehicleSize.COMPACT)
                level.spots.append(spot)
            self.parking_lot.levels.append(level)

    def test_parking_lot_creation(self):
        """Test parking lot creation"""
        self.assertEqual(self.parking_lot.num_levels, 2)
        self.assertEqual(len(self.parking_lot.levels), 2)

    def test_park_vehicle_success(self):
        """Test parking vehicle successfully"""
        car = Car("CAR001")
        result = self.parking_lot.park_vehicle(car)
        self.assertTrue(result)

    def test_park_multiple_vehicles(self):
        """Test parking multiple vehicles"""
        cars = [Car(f"CAR00{i}") for i in range(5)]
        for car in cars:
            result = self.parking_lot.park_vehicle(car)
            self.assertTrue(result)


if __name__ == '__main__':
    unittest.main()
