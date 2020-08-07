# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.create(username: "user", email: "andy@email.com", password: "password")

s1=Song.create(title:"Tank")
s2=Song.create(title:"symmetricbuilding")
s3=Song.create(title:"zelda")
s4=Song.create(title:"Buffalo Roamer")
s5=Song.create(title:"Lake")
s6=Song.create(title:"Pollack")
s7=Song.create(title:"glassball")


s1.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/graffiti.jpg'), filename: 'graffiti.jpg')
s1.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/COWBOY BEBOP OPHQ.mp3'), filename: 'COWBOY BEBOP OPHQ.mp3')

s2.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/symmetricbuilding.jpg.jpg'), filename: 'symmetricbuilding.jpg.jpg')
s2.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3'), filename: 'file_example_MP3_700KB.mp3.')

s3.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/moon.jpg'), filename: 'moon.jpg')
s3.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3'), filename: 'file_example_MP3_700KB.mp3')

s4.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/buffalo.jpg'), filename: 'buffalo.jpg')
s4.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3'), filename: 'file_example_MP3_700KB.mp3')

s5.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/lake.jpg'), filename: 'lake.jpg')
s5.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3'), filename: 'file_example_MP3_700KB.mp3')

s6.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/pollack.jpg'), filename: 'pollack.jpg')
s6.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3'), filename: 'file_example_MP3_700KB.mp3')

s7.photo.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/photos_for_AWS3/glassball.jpg'), filename: 'glassball.jpg')
s7.song.attach(io: open('https://active-storage-bandchamp-dev.us-east-1.amazonaws.com/home/edwardg/Desktop/TestSongs/file_example_MP3_700KB.mp3'), filename: 'file_example_MP3_700KB.mp3')
