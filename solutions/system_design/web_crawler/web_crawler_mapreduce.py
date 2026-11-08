# -*- coding: utf-8 -*-

from mrjob.job import MRJob


class RemoveDuplicateUrls(MRJob):

    def mapper(self, _, line):
        yield line, 1

    def reducer(self, key, values):
        yield key, sum(values)


if __name__ == '__main__':
    RemoveDuplicateUrls.run()
