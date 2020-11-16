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
Album.destroy_all

user1 = User.create(username: 'tutu', email: 'tutu@tutu.com', password:'pineapple1')

a1=Album.create(title: 'The One')
a2=Album.create(title: 'Dosie Doe')
a3=Album.create(title: 'Capital Tango')
a4=Album.create(title: 'Darlene')
a5=Album.create(title: 'Wrong Time')
a6=Album.create(title: 'Terrible Twos')
a7=Album.create(title: 'Locked n Loop')
a8=Album.create(title: 'the One')
a9=Album.create(title: 'Carrols')
a10=Album.create(title: 'Lost in Time')
a11=Album.create(title: 'Car Party')
a12=Album.create(title: 'Fa Gulan')
a13=Album.create(title: 'Sympony')
a14=Album.create(title: 'Le Don Jon')

s1=Song.create(title: 'Zelda',album_id: a1.id)
s2=Song.create(title: 'Bufallo Roamer',album_id:a1.id)
s3=Song.create(title: 'Lake',album_id:a1.id)
s4=Song.create(title: 'Tank',album_id:a2.id)
s5=Song.create(title: 'Pollack',album_id:a2.id)
s6=Song.create(title: 'GlassBall',album_id:a2.id)
s7=Song.create(title: 'SymmetricBuilding',album_id:a3.id)
s8=Song.create(title: 'Sentinel',album_id:a3.id)
s9=Song.create(title: 'illuminati',album_id:a3.id)
s10=Song.create(title: 'Crux',album_id:a4.id)
s11=Song.create(title: 'Doppler',album_id:a4.id)
s12=Song.create(title: 'Crush',album_id:a4.id)
s13=Song.create(title: 'Federerer',album_id:a5.id)
s14=Song.create(title: 'HardyTones',album_id:a5.id)
s15=Song.create(title: 'Karens',album_id:a5.id)
s16=Song.create(title: 'Blues',album_id:a6.id)
s17=Song.create(title: 'Autumn',album_id:a6.id)
s18=Song.create(title: 'Cove',album_id:a6.id)
s19=Song.create(title: 'Drumming in the Rain',album_id:a7.id)
s20=Song.create(title: 'Scared',album_id:a7.id)
s21=Song.create(title: 'Dandelions',album_id:a7.id)
s22=Song.create(title: 'Sharp Clouds',album_id:a8.id)
s23=Song.create(title: 'Elitists',album_id:a8.id)
s24=Song.create(title: 'Cruise',album_id:a8.id)
s25=Song.create(title: 'Holla',album_id:a9.id)
s26=Song.create(title: 'Sweeping',album_id:a9.id)
s27=Song.create(title: 'Spring Migration',album_id:a9.id)
s28=Song.create(title: 'Downfall',album_id:a10.id)
s29=Song.create(title: 'Augmentation',album_id:a10.id)
s30=Song.create(title: 'Cabaret',album_id:a10.id)
s31=Song.create(title: 'Stratum',album_id:a11.id)
s32=Song.create(title: 'Instrumental',album_id:a11.id)
s33=Song.create(title: 'Jauntless',album_id:a11.id)
s34=Song.create(title: 'Worlds End',album_id:a12.id)
s35=Song.create(title: 'Triton',album_id:a12.id)
s36=Song.create(title: 'Equals',album_id:a12.id)
s37=Song.create(title: 'The Cave',album_id:a13.id)
s38=Song.create(title: 'Smoke',album_id:a13.id)
s39=Song.create(title: 'Peacock',album_id:a13.id)
s40=Song.create(title: 'Poseidon',album_id:a14.id)
s41=Song.create(title: 'Adagio Con Anima',album_id:a14.id)
s42=Song.create(title: 'Rust',album_id:a14.id)


p1=Picture.create(imageable: a1, name:'The Weezer')
p2=Picture.create(imageable: a2, name:'Tinker')
p3=Picture.create(imageable: a3, name:'Palinque')
p4=Picture.create(imageable: a4, name:'Nastor')
p5=Picture.create(imageable: a5, name:'Climate Change')
p6=Picture.create(imageable: a6, name:'Huew')
p7=Picture.create(imageable: a7, name:'Yodel-ay')
p8=Picture.create(imageable: a8, name:'Samsquanch')
p9=Picture.create(imageable: a9, name:'Hollow Springs')
p10=Picture.create(imageable: a10, name:'Cheeks')
p11=Picture.create(imageable: a11, name:'The Winter')
p12=Picture.create(imageable: a12, name:'Petre')
p13=Picture.create(imageable: a13, name:'Gong')
p14=Picture.create(imageable: a14, name:'XYn')

p15=Picture.create(imageable: user1, name:'tutu')

file1 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/graffiti.jpg')
file2 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/symmetricbuilding.jpg')
file3 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/moon.jpg')
file4 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/buffalo.jpg')
file5 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/lake.jpg')
file6 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/pollack.jpg')
file7 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/glassball.jpg')
file98 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/picspree-661341.jpg')
file99 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/kaboompics_Field+of+grain.jpg')
file100 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/picspree-865409.jpg')
file101 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/picspree-869604.jpg')
file102 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/kaboompics_Green+smoke+bomb.jpg')
file103 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/picspree-831557.jpg')
file104 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/kaboompics_Having+fun+with+soap+bubbles+in+the+nature.jpg')

file8 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/COWBOY+BEBOP+OPHQ.mp3')
file9 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/file_example_MP3_700KB.mp3')
file10 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Track+5.wav')
file11 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Fpxz9q8fMgdhIKpXl496UTHsMg2nlPCE0XkOm2Dc.mp3')
file12 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/n03VoqjALOlIM8AAUEsJcqTonQ7VWlaaEuMjXqjq.mp3')
file13 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/UtZjndMXb5xd38LAANRA6T3GzpAaidNN6HCOPzGz.mp3')
file14 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/dABFjTuaJAaWSpWP7k3mIlF9YfBzrpcindEoi76p.mp3')
file15 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/JeSGm3URxWWfLTv7ocJHb82jNrYCOFVWQ1G5epfQ.mp3')
file16 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_04_-_Sentinel.mp3')
file17 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_02_-_Illumination.mp3')
file18 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_05_-_Great_Expectations.mp3')
file19 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/kaj3p3avYy3noMSdxYgjiEIACwUYtXt3pJK7K9pZ.mp3')
file20 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_08_-_Downfall.mp3')
file21 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_01_-_Augmentations.mp3')
file22 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_10_-_Cabaret.mp3')
file23 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Drumming_In_The_Rain_Instrumental.mp3')
file24 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Cove_Instrumental.mp3')
file25 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_03_-_Contention.mp3')
file26 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Stratum_Instrumental.mp3')
file27 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Ballad_Of_The_Blackbirds_Instrumental.mp3')
file28 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Spring_Migration_Instrumental.mp3')
file29 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_03_-_Triton.mp3')
file30 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Cove_Instrumental.mp3')
file31 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/David_Hilowitz_-_01_-_Equal_Proportions.mp3')
file32 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_01_-_Poseidon.mp3')
file33 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_01_-_Mors_in_vita.mp3')
file34 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_03_-_III_Finale_Slowly.mp3')
file35 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_02_-_Kants_Vision___Largo_tranquillo.mp3')
file36 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_02_-_Somni_soror.mp3')
file37 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_01_-_Wars_End___Allegro_molto_moderato.mp3')
file38 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_06_-_Jauntiness.mp3')
file39 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Rust.mp3')
file40 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_03_-_Fortuna_saltans.mp3')
file41 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_03_-_World_of_Brothers___Allegretto.mp3')
file42 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Smoke.mp3')
file43 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Chad_Crouch_-_Peacock.mp3')
file44 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_02_-_Amphitrite.mp3')
file45 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_02_-_Adagio_con_anima.mp3')
file46 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Dee_Yan-Key_-_03_-_Intermezzo_Spettrale.mp3')
file47 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_03_-_Thunderstorm_Pon_VIII.mp3')
file48 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_06_-_Murmuration_Pon_IX.mp3')
file49 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_05_-_October.mp3')
file50 = open('https://active-storage-bandchamp-pro.s3.amazonaws.com/Kai_Engel_-_07_-_Downpour_Pon_X.mp3')

p1.photo.attach(io: file3, filename: 'moon.jpg')
p2.photo.attach(io: file4, filename: 'buffalo.jpg')
p3.photo.attach(io: file5, filename: 'lake.jpg')
p4.photo.attach(io: file1, filename: 'graffiti.jpg')
p5.photo.attach(io: file6, filename: 'pollack.jpg')
p6.photo.attach(io: file7, filename: 'glassball.jpg')
p7.photo.attach(io: file2, filename: 'symmetricbuilding.jpg')
p8.photo.attach(io: file98, filename: 'picspree-661341.jpg')
p9.photo.attach(io: file99, filename: 'kaboompics_Field+of+grain.jpg')
p10.photo.attach(io: file100, filename: 'picspree-865409.jpg')
p11.photo.attach(io: file101, filename: 'picspree-869604.jpg')
p12.photo.attach(io: file102, filename: 'kaboompics_Green+smoke+bomb.jpg')
p13.photo.attach(io: file103, filename: 'picspree-831557.jpg')
p14.photo.attach(io: file104, filename: 'kaboompics_Having+fun+with+soap+bubbles+in+the+nature.jpg')

s1.song.attach(io: file8, filename: 'COWBOY BEBOP OPHQ.mp3')
s2.song.attach(io: file9, filename: 'file_example_MP3_700KB.mp3')
s3.song.attach(io: file10, filename: 'Track 5.wav')
s4.song.attach(io: file11, filename: 'Fpxz9q8fMgdhIKpXl496UTHsMg2nlPCE0XkOm2Dc.mp3')
s5.song.attach(io: file12, filename: 'n03VoqjALOlIM8AAUEsJcqTonQ7VWlaaEuMjXqjq.mp3')
s6.song.attach(io: file13, filename: 'UtZjndMXb5xd38LAANRA6T3GzpAaidNN6HCOPzGz.mp3')
s7.song.attach(io: file14, filename: 'dABFjTuaJAaWSpWP7k3mIlF9YfBzrpcindEoi76p.mp3')
s8.song.attach(io: file15, filename: 'JeSGm3URxWWfLTv7ocJHb82jNrYCOFVWQ1G5epfQ.mp3')
s9.song.attach(io: file16, filename: 'Kai_Engel_-_04_-_Sentinel.mp3')
s10.song.attach(io: file17, filename: 'Kai_Engel_-_02_-_Illumination.mp3')
s11.song.attach(io: file18, filename: 'Kai_Engel_-_05_-_Great_Expectations.mp3')
s12.song.attach(io: file19, filename: 'kaj3p3avYy3noMSdxYgjiEIACwUYtXt3pJK7K9pZ.mp3')
s13.song.attach(io: file20, filename: 'Kai_Engel_-_08_-_Downfall.mp3')
s14.song.attach(io: file21, filename: 'Kai_Engel_-_01_-_Augmentations.mp3')
s15.song.attach(io: file22, filename: 'Kai_Engel_-_10_-_Cabaret.mp3')
s16.song.attach(io: file23, filename: 'Chad_Crouch_-_Drumming_In_The_Rain_Instrumental.mp3')
s17.song.attach(io: file24, filename: 'Chad_Crouch_-_Cove_Instrumental.mp3')
s18.song.attach(io: file25, filename: 'Kai_Engel_-_03_-_Contention.mp3')
s19.song.attach(io: file26, filename: 'Chad_Crouch_-_Stratum_Instrumental.mp3')
s20.song.attach(io: file27, filename: 'Chad_Crouch_-_Ballad_Of_The_Blackbirds_Instrumental.mp3')
s21.song.attach(io: file28, filename: 'Chad_Crouch_-_Spring_Migration_Instrumental.mp3')
s22.song.attach(io: file29, filename: 'Dee_Yan-Key_-_03_-_Triton.mp3')
s23.song.attach(io: file30, filename: 'Chad_Crouch_-_Cove_Instrumental.mp3')
s24.song.attach(io: file31, filename: 'David_Hilowitz_-_01_-_Equal_Proportions.mp3')
s25.song.attach(io: file32, filename: 'Dee_Yan-Key_-_01_-_Poseidon.mp3')
s26.song.attach(io: file33, filename: 'Dee_Yan-Key_-_01_-_Mors_in_vita.mp3')
s27.song.attach(io: file34, filename: 'Dee_Yan-Key_-_03_-_III_Finale_Slowly.mp3')
s28.song.attach(io: file35, filename: 'Dee_Yan-Key_-_02_-_Kants_Vision___Largo_tranquillo.mp3')
s29.song.attach(io: file36, filename: 'Dee_Yan-Key_-_02_-_Somni_soror.mp3')
s30.song.attach(io: file37, filename: 'Dee_Yan-Key_-_01_-_Wars_End___Allegro_molto_moderato.mp3')
s31.song.attach(io: file38, filename: 'Dee_Yan-Key_-_06_-_Jauntiness.mp3')
s32.song.attach(io: file39, filename: 'Chad_Crouch_-_Rust.mp3')
s33.song.attach(io: file40, filename: 'Dee_Yan-Key_-_03_-_Fortuna_saltans.mp3')
s34.song.attach(io: file41, filename: 'Dee_Yan-Key_-_03_-_World_of_Brothers___Allegretto.mp3')
s35.song.attach(io: file42, filename: 'Chad_Crouch_-_Smoke.mp3')
s36.song.attach(io: file43, filename: 'Chad_Crouch_-_Peacock.mp3')
s37.song.attach(io: file44, filename: 'Dee_Yan-Key_-_02_-_Amphitrite.mp3')
s38.song.attach(io: file45, filename: 'Dee_Yan-Key_-_02_-_Adagio_con_anima.mp3')
s39.song.attach(io: file46, filename: 'Dee_Yan-Key_-_03_-_Intermezzo_Spettrale.mp3')
s40.song.attach(io: file47, filename: 'Kai_Engel_-_03_-_Thunderstorm_Pon_VIII.mp3')
s41.song.attach(io: file48, filename: 'Kai_Engel_-_06_-_Murmuration_Pon_IX.mp3')
s42.song.attach(io: file49, filename: 'Kai_Engel_-_05_-_October.mp3')