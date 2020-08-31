# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

s1=Song.find(1)
s2=Song.find(7)
s3=Song.find(2)
s4=Song.find(3)
s5=Song.find(4)
s6=Song.find(5)
s7=Song.find(6)


s1.photo.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/CC9LTSMf3uBbFx9Ww3nf2zf1'), filename: 'graffiti.jpg')
s1.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/q3t92Q2U4hFt9et3dZui2Dka'), filename: 'COWBOY BEBOP OPHQ.mp3')

s2.photo.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/QK2WSskcg2qeLTX5HzruPbfj'), filename: 'symmetricbuilding.jpg.jpg')
s2.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'file_example_MP3_700KB.mp3.')

s3.photo.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/KofTRZM5vjEZVkBNyueSV97Q'), filename: 'moon.jpg')
s3.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'file_example_MP3_700KB.mp3')

s4.photo.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/ZDPJBeWDxmpffDVEoBUKZdCb'), filename: 'buffalo.jpg')
s4.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'file_example_MP3_700KB.mp3')

s5.photo.attach(io: File.open('https://active-storage-bandchahttps://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'lake.jpg')
s5.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'file_example_MP3_700KB.mp3')

s6.photo.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/UAK28vwTtbd2vn4WE7NpNbhT'), filename: 'pollack.jpg')
s6.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'file_example_MP3_700KB.mp3')

s7.photo.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BSKz5fv1RsNQ93uTFS8yPLH5'), filename: 'glassball.jpg')
s7.song.attach(io: File.open('https://active-storage-bandchamp-dev.s3.us-east-1.amazonaws.com/BJZbEQtUuvMPARQgkWZBkZDL'), filename: 'file_example_MP3_700KB.mp3')

