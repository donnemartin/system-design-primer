
class CircularArray(object):

    def __init__(self, MAX_SIZE):
        self.MAX_SIZE = MAX_SIZE
        self.size = 0
        self.array = [None] * MAX_SIZE
        self.front = 0
        self.back = 0

    def push(self, value):
        """Push the value to the back of the circular array
        """
        if self.size == self.MAX_SIZE:
            raise IndexError('Array is full')
        self.array[self.back] = value
        self.back += 1
        self.size += 1
        
        # wrap around
        if self.back == self.MAX_SIZE:
            self.back = 0

    def pop(self):
        """Pop a value from the front of the circular array
        """
        if self.size == 0:
            raise IndexError('Array is empty')
        ret = self.array[self.front]
        self.front += 1
        self.size -= 1

        # wrap around
        if self.front == self.MAX_SIZE:
            self.front = 0
        return ret
        
    def print_array(self):
        print('Array: ', end = ' ')
        if self.size == 0:
            print('empty')
            return
        i = self.front
        while True:
            print(self.array[i], end = ' ')
            i += 1
            if i == self.MAX_SIZE:
                i = 0
            if i == self.back:
                print()
                break

    
