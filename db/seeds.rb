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
Picture.destroy_all
Active_storage_blob.destroy_all
Active_storage_attachments.destroy_all

user1 = User.create(username: 'user1', email: 'fake@fake.com', password:'password')

s2=Song.create(title: 'Zelda')
s3=Song.create(title: 'Bufallo Roamer')
s4=Song.create(title: 'Lake')
s1=Song.create(title: 'Tank')
s5=Song.create(title: 'Pollack')
s6=Song.create(title: 'GlassBall')
s7=Song.create(title: 'SymmetricBuilding')

p2=Picture.create(imageable: Song.find_by(id:'2'), name: 'Zelda')
p3=Picture.create(imageable: Song.find_by(id:'3'), name: 'Bufallo Roamer')
p4=Picture.create(imageable: Song.find_by(id:'4'), name: 'Lake')
p1=Picture.create(imageable: Song.find_by(id:'1'), name: 'Tank')
p5=Picture.create(imageable: Song.find_by(id:'5'), name: 'Pollack')
p6=Picture.create(imageable: Song.find_by(id:'6'), name: 'GlassBall')
p7=Picture.create(imageable: Song.find_by(id:'7'), name: 'SymmetricBuilding')

file1 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/graffiti.jpg')
file2 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/COWBOY+BEBOP+OPHQ.mp3')

file3 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/symmetricbuilding.jpg')
file4 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/file_example_MP3_700KB.mp3')

file5 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/moon.jpg')
file6 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Track+5.wav')

file7 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/buffalo.jpg')
file8 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/COWBOY+BEBOP+OPHQ.mp3')

file9 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/lake.jpg')
file10 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/file_example_MP3_700KB.mp3')

file11 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/pollack.jpg')
file12 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/file_example_MP3_700KB.mp3')

file13 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/glassball.jpg')
file14 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/file_example_MP3_700KB.mp3')


p2.photo.attach(io: file5, filename: 'moon.jpg')
p3.photo.attach(io: file7, filename: 'buffalo.jpg')
p4.photo.attach(io: file9, filename: 'lake.jpg')
p1.photo.attach(io: file1, filename: 'graffiti.jpg')
p5.photo.attach(io: file11, filename: 'pollack.jpg')
p6.photo.attach(io: file13, filename: 'glassball.jpg')
p7.photo.attach(io: file3, filename: 'symmetricbuilding.jpg')

s2.song.attach(io: file6, filename: 'Track 5.wav')
s3.song.attach(io: file8, filename: 'COWBOY BEBOP OPHQ.mp3')
s4.song.attach(io: file10, filename: 'file_example_MP3_700KB.mp3')
s1.song.attach(io: file2, filename: 'COWBOY BEBOP OPHQ.mp3')
s5.song.attach(io: file12, filename: 'file_example_MP3_700KB.mp3')
s6.song.attach(io: file14, filename: 'file_example_MP3_700KB.mp3')
s7.song.attach(io: file4, filename: 'file_example_MP3_700KB.mp3')