#include <iostream>
#include <vector>
#include <string>
#include <memory>

enum class VehicleSize {
    MOTORCYCLE,
    COMPACT,
    LARGE
};

std::string vehicleSizeToString(VehicleSize size) {
    switch (size) {
        case VehicleSize::MOTORCYCLE: return "Motorcycle";
        case VehicleSize::COMPACT: return "Compact";
        case VehicleSize::LARGE: return "Large";
        default: return "Unknown";
    }
}

class ParkingSpot;

class Vehicle {
protected:
    VehicleSize vehicleSize;
    std::string licensePlate;
    int spotSize;
    std::vector<ParkingSpot*> spotsTaken;

public:
    Vehicle(VehicleSize size, const std::string& plate, int spotSz)
        : vehicleSize(size), licensePlate(plate), spotSize(spotSz) {}

    virtual ~Vehicle() = default;

    virtual bool canFitInSpot(ParkingSpot* spot) = 0;

    void clearSpots();

    void takeSpot(ParkingSpot* spot) {
        spotsTaken.push_back(spot);
    }

    VehicleSize getSize() const { return vehicleSize; }
    std::string getPlate() const { return licensePlate; }
    int getSpotSize() const { return spotSize; }
};

class Motorcycle : public Vehicle {
public:
    Motorcycle(const std::string& plate)
        : Vehicle(VehicleSize::MOTORCYCLE, plate, 1) {}

    bool canFitInSpot(ParkingSpot* spot) override {
        return true;
    }
};

class Car : public Vehicle {
public:
    Car(const std::string& plate)
        : Vehicle(VehicleSize::COMPACT, plate, 1) {}

    bool canFitInSpot(ParkingSpot* spot) override;
};

class Bus : public Vehicle {
public:
    Bus(const std::string& plate)
        : Vehicle(VehicleSize::LARGE, plate, 5) {}

    bool canFitInSpot(ParkingSpot* spot) override;
};

class ParkingSpot {
private:
    int level;
    int row;
    int spotNumber;
    VehicleSize spotSize;
    Vehicle* vehicle;

public:
    ParkingSpot(int lvl, int r, int spotNum, VehicleSize size)
        : level(lvl), row(r), spotNumber(spotNum), spotSize(size), vehicle(nullptr) {}

    bool isAvailable() const {
        return vehicle == nullptr;
    }

    bool canFitVehicle(Vehicle* v) {
        if (vehicle != nullptr) return false;
        return v->canFitInSpot(this);
    }

    void parkVehicle(Vehicle* v) {
        vehicle = v;
        v->takeSpot(this);
    }

    void removeVehicle() {
        vehicle = nullptr;
    }

    VehicleSize getSpotSize() const { return spotSize; }
    int getSpotNumber() const { return spotNumber; }
};

void Vehicle::clearSpots() {
    for (auto spot : spotsTaken) {
        spot->removeVehicle();
    }
    spotsTaken.clear();
}

bool Car::canFitInSpot(ParkingSpot* spot) {
    return spot->getSpotSize() == VehicleSize::LARGE ||
           spot->getSpotSize() == VehicleSize::COMPACT;
}

bool Bus::canFitInSpot(ParkingSpot* spot) {
    return spot->getSpotSize() == VehicleSize::LARGE;
}

class Level {
private:
    int floor;
    int numSpots;
    int availableSpots;
    std::vector<ParkingSpot*> spots;
    static const int SPOTS_PER_ROW = 10;

public:
    Level(int fl, int totalSpots) : floor(fl), numSpots(totalSpots), availableSpots(0) {
        int spotsForLargeVehicles = totalSpots / 5;
        int spotsForCompact = totalSpots / 3;

        for (int i = 0; i < spotsForLargeVehicles; i++) {
            spots.push_back(new ParkingSpot(floor, i / SPOTS_PER_ROW, i, VehicleSize::LARGE));
        }

        for (int i = spotsForLargeVehicles; i < spotsForLargeVehicles + spotsForCompact; i++) {
            spots.push_back(new ParkingSpot(floor, i / SPOTS_PER_ROW, i, VehicleSize::COMPACT));
        }

        for (int i = spotsForLargeVehicles + spotsForCompact; i < totalSpots; i++) {
            spots.push_back(new ParkingSpot(floor, i / SPOTS_PER_ROW, i, VehicleSize::MOTORCYCLE));
        }

        availableSpots = totalSpots;
    }

    ~Level() {
        for (auto spot : spots) {
            delete spot;
        }
    }

    void spotFreed() {
        availableSpots++;
    }

    ParkingSpot* parkVehicle(Vehicle* vehicle) {
        ParkingSpot* spot = findAvailableSpot(vehicle);
        if (spot) {
            spot->parkVehicle(vehicle);
            availableSpots--;
        }
        return spot;
    }

private:
    ParkingSpot* findAvailableSpot(Vehicle* vehicle) {
        for (auto spot : spots) {
            if (spot->canFitVehicle(vehicle)) {
                return spot;
            }
        }
        return nullptr;
    }
};

class ParkingLot {
private:
    int numLevels;
    std::vector<Level*> levels;

public:
    ParkingLot(int numLvls) : numLevels(numLvls) {
        for (int i = 0; i < numLvls; i++) {
            levels.push_back(new Level(i, 100));
        }
    }

    ~ParkingLot() {
        for (auto level : levels) {
            delete level;
        }
    }

    bool parkVehicle(Vehicle* vehicle) {
        for (auto level : levels) {
            ParkingSpot* spot = level->parkVehicle(vehicle);
            if (spot) {
                std::cout << "Parked " << vehicle->getPlate()
                          << " at level, spot " << spot->getSpotNumber() << std::endl;
                return true;
            }
        }
        std::cout << "Could not park " << vehicle->getPlate() << std::endl;
        return false;
    }
};

int main() {
    ParkingLot lot(3);

    Motorcycle moto("MOTO-1");
    Car car1("CAR-1");
    Car car2("CAR-2");
    Bus bus1("BUS-1");

    lot.parkVehicle(&moto);
    lot.parkVehicle(&car1);
    lot.parkVehicle(&car2);
    lot.parkVehicle(&bus1);

    return 0;
}
