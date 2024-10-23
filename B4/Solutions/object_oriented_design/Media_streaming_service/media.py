class User:
    def __init__(self, user_id, name, subscription):
        self.user_id = user_id
        self.name = name
        self.subscription = subscription
        self.playlists = []

    def create_playlist(self, playlist_name):
        playlist = Playlist(playlist_name)
        self.playlists.append(playlist)
        print(f"Playlist '{playlist_name}' created for {self.name}.")

    def recommend_content(self, media_library):
        recommendations = media_library.get_recommendations(self)
        print(f"Recommendations for {self.name}: {', '.join(recommendations)}")

class Subscription:
    def __init__(self, subscription_type, monthly_fee):
        self.subscription_type = subscription_type
        self.monthly_fee = monthly_fee

class Media:
    def __init__(self, media_id, title, genre):
        self.media_id = media_id
        self.title = title
        self.genre = genre
        self.play_count = 0

    def play(self):
        self.play_count += 1
        print(f"Playing '{self.title}'.")

class Playlist:
    def __init__(self, name):
        self.name = name
        self.media_items = []

    def add_media(self, media):
        self.media_items.append(media)
        print(f"Added '{media.title}' to playlist '{self.name}'.")

    def show_playlist(self):
        print(f"Playlist '{self.name}': {[media.title for media in self.media_items]}")

class MediaLibrary:
    def __init__(self):
        self.media_collection = []

    def add_media(self, media):
        self.media_collection.append(media)
        print(f"Media '{media.title}' added to the library.")

    def get_recommendations(self, user):
        # Simple recommendation based on genres of user's playlists
        recommended = []
        for playlist in user.playlists:
            for media in playlist.media_items:
                if media.genre not in recommended:
                    recommended.append(media.genre)
        
        # Return a list of media titles from the library that match recommended genres
        recommendations = [media.title for media in self.media_collection if media.genre in recommended]
        return recommendations[:5]  # Limit to 5 recommendations

# Example Usage
# Create media library and add media
media_library = MediaLibrary()
media_library.add_media(Media(1, "Inception", "Sci-Fi"))
media_library.add_media(Media(2, "Titanic", "Romance"))
media_library.add_media(Media(3, "The Matrix", "Sci-Fi"))
media_library.add_media(Media(4, "The Godfather", "Crime"))
media_library.add_media(Media(5, "Interstellar", "Sci-Fi"))

# Create a subscription
basic_subscription = Subscription("Basic", 9.99)

# Create a user
user1 = User(1, "Alice", basic_subscription)

# User creates a playlist and adds media
user1.create_playlist("Favorites")
user1.playlists[0].add_media(media_library.media_collection[0])  # Inception
user1.playlists[0].add_media(media_library.media_collection[2])  # The Matrix

# Show the user's playlist
user1.playlists[0].show_playlist()

# Get recommendations for the user
user1.recommend_content(media_library)

# Play a media item
media_library.media_collection[0].play()  # Play Inception
