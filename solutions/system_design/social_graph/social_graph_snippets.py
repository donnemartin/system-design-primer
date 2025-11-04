from collections import deque
from enum import Enum


class Person:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.friend_ids = []

    def __repr__(self):
        return f"Person({self.id}, {self.name})"


class LookupService:
    def __init__(self):
        self.lookup = {}  # key: person_id, value: PersonServer

    def get_person(self, person_id):
        person_server = self.lookup.get(person_id)
        if person_server:
            return person_server.people.get(person_id)
        return None


class PersonServer:
    def __init__(self):
        self.people = {}  # key: person_id, value: Person

    def get_people(self, ids):
        return [self.people[id] for id in ids if id in self.people]


class UserGraphService:
    def __init__(self, person_ids, lookup: LookupService):
        self.lookup = lookup
        self.person_ids = person_ids
        self.visited_ids = set()

    def bfs(self, source_id, dest_id):
        source = self.lookup.get_person(source_id)
        dest = self.lookup.get_person(dest_id)

        if source is None or dest is None:
            return False

        queue = deque()
        queue.append(source)
        self.visited_ids.add(source.id)

        while queue:
            current_person = queue.popleft()
            print(current_person)

            if current_person.id == dest.id:
                return True

            # Get actual Person objects for friends
            for friend_id in current_person.friend_ids:
                if friend_id not in self.visited_ids:
                    friend = self.lookup.get_person(friend_id)
                    if friend:
                        queue.append(friend)
                        self.visited_ids.add(friend.id)

        return False

