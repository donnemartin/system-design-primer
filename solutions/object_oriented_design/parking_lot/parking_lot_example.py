import json
from enum import Enum

# design a parking lot
# assumption is vehicle size corresponds to spot size

"""
vehicle_size_small; spot_size = 0 => can park Motorcycle 
vehicle_size_medium ; spot_size = 1  => can park Motorcycle or Car
vehicle_size_large ; spot_size = 2 => can park Motorcycle or Car

Bus can park if we have 5 consecutive "large" spots
"""


class VehicleType(Enum):
    MOTORCYCLE = 'MOTORCYCLE',
    CAR = 'CAR',
    BUS = 'BUS'


class VehicleSize(Enum):
    SMALL = 0
    MEDIUM = 1
    LARGE = 2
    VERY_LARGE = 10


class Vehicle(object):

    def __init__(self, vehicle_size, license_plate, vehicle_type):
        self.vehicle_size = vehicle_size
        self.license_plate = license_plate
        self.vehicle_type = vehicle_type
        self.spots_taken = []

    def __repr__(self):
        return """
                vehicle_size : {vehicle_size},
                license_plate : {license_plate},
                vehicle_type : {vehicle_type},
                spots_taken : {spots_taken}
        """.format(vehicle_size=self.vehicle_size, license_plate=self.license_plate,
                   vehicle_type=self.vehicle_type, spots_taken=self.spots_taken)

    def clear_spots(self):
        for spot in self.spots_taken:
            spot.remove_vehicle(self)
        self.sport_taken = []

    def take_spot(self, spot):
        self.spots_taken.append(spot)


class ParkingLot(object):
    def __init__(self, num_levels):
        self.num_levels = num_levels
        self.levels = []

    def __repr__(self):
        return """
        number_of_levels : {num_levels},
        levels : {levels}
        """.format(num_levels=self.num_levels, levels=self.levels)

    def park_vehicle(self, vehicle):
        for level in self.levels:
            spot = level.reserve_spot(vehicle)
            if spot:
                print(" == TICKET PRINTING - PARKING SPOT RESERVED == ")
                print(vehicle)
                return True
            else:
                return False


class ParkingLevel(object):

    def __init__(self, level, total_spots):

        self.level = level
        self.num_spots = total_spots
        self.available_spots = total_spots
        self.parking_spots = []
        self.reserved_spots = []

    def __repr__(self):
        return """
        level : {level},
        number_of_spots : {num_spots},
        avialable_spots : {available_spots},
        parking_spots : {parking_spots},
        reserved_spots : {reserved_spots}
        """.format(level=self.level, num_spots=self.num_spots, available_spots=self.available_spots,
                   parking_spots=self.parking_spots, reserved_spots=self.reserved_spots)

    def spot_reserved(self, index, spot):
        self.reserved_spots.append(spot)
        self.parking_spots.pop(index)
        self.available_spots -= 1

    def reserve_spot(self, vehicle):

        # for motorcycle or car for exact match
        for index, parking_spot in enumerate(self.parking_spots):

            if parking_spot.spot_size == vehicle.vehicle_size.value:
                # parking_spot.vehicle = vehicle
                self.spot_reserved(index, parking_spot)
                vehicle.spots_taken.append(parking_spot)
                return parking_spot
        # for motorcycle or car no exact match;ie vehicle less then size of spot
        for index, parking_spot in enumerate(self.parking_spots):

            if parking_spot.spot_size > vehicle.vehicle_size.value:
                # parking_spot.vehicle = vehicle
                self.spot_reserved(index, parking_spot)
                vehicle.spots_taken.append(parking_spot)
                return parking_spot
        # for bus , find 5 consecutive free spot
        for index, parking_spot in enumerate(self.parking_spots):

            if parking_spot.spot_size < vehicle.vehicle_size.value:
                # if ... sliding window for checking 5 consecutive free spot
                # loop parking_spot.vehicle = vehicle
                # loop self.spot_reserved(index, parking_spot)
                # loop vehicle.spots_taken.append(parking_spot)
                # return parking_spot as string using ''.join()
                pass
        return False


class ParkingSpot(object):
    def __init__(self, level, row, spot_number, spot_size):
        self.level = level
        self.row = row
        self.spot_number = spot_number
        self.spot_size = spot_size
        self.vehicle = None

        # logic for bus pending

    def __repr__(self):
        return """
        level : {level},
        row : {row}, 
        spot_number : {spot_number},
        spot_size : {spot_size}
        vehicle : {vehicle} 
        """.format(level=self.level, row=self.row, spot_number=self.spot_number,
                   vehicle=self.vehicle, spot_size=self.spot_size)


if __name__ == '__main__':

    try:
        f = open('input_parking_lot_example.json')
        data = json.load(f)
    except Exception as E:
        print("Error opening input_parking_lot_example.json file")
        print(E)

    number_of_rows = data['number_of_rows_in_each_level']
    number_of_spots_in_each_row = data['number_of_spots_in_each_row']
    total_number_of_spots_in_level = number_of_rows * number_of_spots_in_each_row
    number_of_levels = data['total_number_of_levels']

    parking_lot = ParkingLot(num_levels=number_of_levels)

    for level_name, level in data['levels'].items():
        parking_level = ParkingLevel(level=level_name, total_spots=total_number_of_spots_in_level)
        for spot in level:
            parking_spot = ParkingSpot(
                level=spot['level'],
                row=spot['row'],
                spot_number=spot['spot_number'],
                spot_size=spot['spot_size']
            )
            parking_level.parking_spots.append(parking_spot)
        parking_lot.levels.append(parking_level)

    input_vehicle_list = []
    for user_name, user in data['users'].items():
        vehicle_q_id = user_name
        vehicle = Vehicle(
            vehicle_size=VehicleSize["MEDIUM"],
            license_plate=user['license_plate'],
            vehicle_type=VehicleType["CAR"])
        input_vehicle_list.append(vehicle)

    # processing of inputs in input_list

    for idx, input_vehicle in enumerate(input_vehicle_list):
        parking_lot.park_vehicle(input_vehicle)
