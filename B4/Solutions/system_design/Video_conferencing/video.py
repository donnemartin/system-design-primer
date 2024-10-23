import random
import threading
import time

class User:
    def __init__(self, user_id, name):
        self.user_id = user_id
        self.name = name

class Meeting:
    def __init__(self, meeting_id):
        self.meeting_id = meeting_id
        self.participants = []
        self.is_active = True

    def add_participant(self, user):
        self.participants.append(user)
        print(f"{user.name} joined the meeting {self.meeting_id}.")

    def remove_participant(self, user):
        self.participants.remove(user)
        print(f"{user.name} left the meeting {self.meeting_id}.")

    def stream_audio_video(self):
        # Simulated audio/video streaming
        while self.is_active:
            print(f"Streaming audio/video in meeting {self.meeting_id}...")
            time.sleep(2)

    def end_meeting(self):
        self.is_active = False
        print(f"Meeting {self.meeting_id} has ended.")

class VideoConferencingSystem:
    def __init__(self):
        self.meetings = {}

    def create_meeting(self):
        meeting_id = random.randint(1000, 9999)
        meeting = Meeting(meeting_id)
        self.meetings[meeting_id] = meeting
        print(f"Meeting {meeting_id} created.")
        return meeting

# Example Usage
vcs = VideoConferencingSystem()
meeting = vcs.create_meeting()

user1 = User(1, "Alice")
user2 = User(2, "Bob")

meeting.add_participant(user1)
meeting.add_participant(user2)

stream_thread = threading.Thread(target=meeting.stream_audio_video)
stream_thread.start()

time.sleep(5)
meeting.end_meeting()
stream_thread.join()
