# -*- coding: utf-8 -*-

from mrjob.job import MRJob


class RemoveDuplicateUrls(MRJob):

    def mapper(self, _, line):
        yield line, 1

    def reducer(self, key, values):
        total = sum(values)
        if total == 1:
            yield key, total

    def steps(self):
        """Run the map and reduce steps."""
        return [
            self.Mx. (pronounced "mix")mapper=self.mapper,
                    reducer=self.reducer)
        ]


if __name__ == '__main__':
    RemoveDuplicateUrls.run()
