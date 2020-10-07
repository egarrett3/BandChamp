# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Song.destroy_all
User.destroy_all

user1 = User.create(username: 'user1', email: 'fake@fake.com', password:'password')

s2=Song.create(title: 'Zelda')
s3=Song.create(title: 'Bufallo Roamer')
s4=Song.create(title: 'Lake')
s1=Song.create(title: 'Tank')
s5=Song.create(title: 'Pollack')
s6=Song.create(title: 'GlassBall')
s7=Song.create(title: 'SymmetricBuilding')


# file1 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/graffiti.jpg')
# file2 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/COWBOY BEBOP OPHQ.mp3')

# file3 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/symmetricbuilding.jpg')
# file4 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3')

# file5 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/moon.jpg')
# file6 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/Track 5.wav')

# file7 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/buffalo.jpg')
# file8 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/COWBOY BEBOP OPHQ.mp3')

# file9 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/lake.jpg')
# file10 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3')

# file11 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/pollack.jpg')
# file12 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3')

# file13 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/glassball.jpg')
# file14 = open('https://active-storage-bandchamp-pro.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3')



# s2.photo.attach(io: file5, filename: 'moon.jpg')
# s3.photo.attach(io: file7, filename: 'buffalo.jpg')
# s4.photo.attach(io: file9, filename: 'lake.jpg')
# s1.photo.attach(io: file1, filename: 'graffiti.jpg')
# s5.photo.attach(io: file11, filename: 'pollack.jpg')
# s6.photo.attach(io: file13, filename: 'glassball.jpg')
# s7.photo.attach(io: file3, filename: 'symmetricbuilding.jpg')

# s2.song.attach(io: file6, filename: 'Track 5.wav')
# s3.song.attach(io: file8, filename: 'COWBOY BEBOP OPHQ.mp3')
# s4.song.attach(io: file10, filename: 'file_example_MP3_700KB.mp3')
# s1.song.attach(io: file2, filename: 'COWBOY BEBOP OPHQ.mp3')
# s5.song.attach(io: file12, filename: 'file_example_MP3_700KB.mp3')
# s6.song.attach(io: file14, filename: 'file_example_MP3_700KB.mp3')
# s7.song.attach(io: file4, filename: 'file_example_MP3_700KB.mp3')