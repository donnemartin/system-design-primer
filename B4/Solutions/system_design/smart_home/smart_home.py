class SmartDevice:
    def __init__(self, device_id, device_type):
        self.device_id = device_id
        self.device_type = device_type
        self.is_on = False

    def turn_on(self):
        self.is_on = True
        print(f"{self.device_type} {self.device_id} turned on.")

    def turn_off(self):
        self.is_on = False
        print(f"{self.device_type} {self.device_id} turned off.")

class SmartHomeSystem:
    def __init__(self):
        self.devices = {}

    def add_device(self, device):
        self.devices[device.device_id] = device
        print(f"Added {device.device_type} {device.device_id}.")

    def control_device(self, device_id, action):
        device = self.devices.get(device_id)
        if device:
            if action == "on":
                device.turn_on()
            elif action == "off":
                device.turn_off()
            else:
                print("Invalid action.")
        else:
            print("Device not found.")

# Example Usage
smart_home = SmartHomeSystem()
light = SmartDevice(1, "Light")
thermostat = SmartDevice(2, "Thermostat")

smart_home.add_device(light)
smart_home.add_device(thermostat)

smart_home.control_device(1, "on")  # Turn on the light
smart_home.control_device(2, "off")  # Turn off the thermostat
