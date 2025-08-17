class CircularArray:
    """
    Python class implementing a circular array.
    """
    def __init__(self, size):
        """
        Constructor. Refer to `full()` for explanation for `size+1`.
        """
        self._size = size + 1
        self._items = [None for _ in range(self._size)]
        self._read = 0    # read pointer
        self._write = 0   # write pointer
        
    @property
    def empty(self):
        """
        Returns whether the queue is empty.
        """
        return self._read == self._write
    
    @property
    def full(self):
        """
        Return wheter the queue is full.
        In a naive implementation, full and empty are both indicated by read == write, which introduces an
        ambiguity. Thus, to break this, a circular array is assumed to be full if the write pointer is one
        position behind the read pointer. To preserve the inituitiveness of the class interface, the internal
        size property is incremented by 1, a sentinel element (so this way the user won't be surprised that their
        array that supposedly fits 10 elements only accomodates 9).
        """
        return self._read == (self._write + 1) % self._size
    
    def queue(self, item):
        """
        Enqueues an item in the circular buffer.
        """
        if self.full:
            raise BufferError('Queue is full')
        self._items[self._write] = item
        self._write = (self._write + 1) % self._size
    
    def dequeue(self):
        """
        Dequeues an item from the buffer.
        """
        if self.empty:
            raise BufferError('Queue is empty')
        item = self._items[self._read]
        self._items[self._read] = None
        self._read = (self._read + 1) % self._size
        return item
