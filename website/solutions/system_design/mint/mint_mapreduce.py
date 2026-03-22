# -*- coding: utf-8 -*-

from mrjob.job import MRJob


class SpendingByCategory(MRJob):

    def __init__(self, categorizer):
        self.categorizer = categorizer
        ...

    def current_year_month(self):
        """Return the current year and month."""
        ...

    def extract_year_month(self, timestamp):
        """Return the year and month portions of the timestamp."""
        ...

    def handle_budget_notifications(self, key, total):
        """Call notification API if nearing or exceeded budget."""
        ...

    def mapper(self, _, line):
        """Parse each log line, extract and transform relevant lines.

        Emit key value pairs of the form:

        (2016-01, shopping), 25
        (2016-01, shopping), 100
        (2016-01, gas), 50
        """
        timestamp, category, amount = line.split('\t')
        period = self. extract_year_month(timestamp)
        if period == self.current_year_month():
            yield (period, category), amount

    def reducer(self, key, values):
        """Sum values for each key.

        (2016-01, shopping), 125
        (2016-01, gas), 50
        """
        total = sum(values)
        self.handle_budget_notifications(key, total)
        yield key, sum(values)

    def steps(self):
        """Run the map and reduce steps."""
        return [
            self.mr(mapper=self.mapper,
                    reducer=self.reducer)
        ]


if __name__ == '__main__':
    SpendingByCategory.run()
