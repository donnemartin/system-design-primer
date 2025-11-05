class CircularArray(object):
    def __init__(self, size):
        if size <= 0:
            raise ValueError("Size has to be non zero positive number")
        self.size = size
        self.array = self.size *[None]
        self.start = self.end = None
        
    def capacity(self):
        return self.size
    
    def __len__(self):
        if self.start is None:
            return 0
        return (self.end - self.start + self.size ) % self.size + 1
    
    def __getitem__(self, key):
        if key < 0:
            raise ValueError("Key has to be a positive number")
        if self.start is None:
            return None
        index = (key + self.start) % self.size
        return self.array[index]
    
    def push(self, value):
        if self.start is None:
            self.start = self.end = 0
        else:
            index = (self.end + 1) % self.size
            if index == self.start:
                raise IndexError("Push to full array ")
            self.end = index
        self.array[self.end] = value
    
    def __repr__(self):
        if self.start is None:
            return '[]'
        if self.start < self.end:
            return repr(self.array[self.start:self.end+1])
        return repr(self.array[self.start:]+self.array[:self.end+1])
    
    def pop(self):
        if self.start is None:
            raise RuntimeException("Pop on nil array")
        value = self.array[self.start]
        if self.start == self.end:
            self.start = self.end = None
            return value
        self.start = (self.start + 1) % self.size
        return value