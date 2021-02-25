import random
import mysql.connector
from os import listdir, scandir
from os.path import isfile, join, getsize

cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Screwpep39",
    database="dbo"
)

memeDirectory = "D:\Flim's Documents\Funnies\emergency funnies\private reserve"
legoDirectory = "D:\\temporary funnies\photos\\nostalgia\\toys\lego"
musicDirectory = "C:\\Users\Timothy\Desktop\\target music\\Albert King"

# def insertToDir(mycursor, mypath):
#     onlyfiles = [f for f in listdir(mypath)]
#     for fileName in onlyfiles:
#         sql = 'INSERT INTO artists (band_name) VALUES (%s)'
#         mycursor.execute(sql, (fileName,))
#     cnx.commit()

def insertToDir(mycursor, mypath):
    # if isfile(join(mypath, f))
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    for fileName in onlyfiles:
        sql = 'INSERT INTO songs (song_name, song_length) VALUES (%s, %s)'
        mycursor.execute(sql, (fileName, random.randint(200, 400)))
    cnx.commit()


def deleteFromTable(mycursor):
    sql = 'DELETE FROM songs'
    mycursor.execute(sql)
    cnx.commit()



mycursor = cnx.cursor()

# deleteFromTable(mycursor)
# insertToDir(mycursor, musicDirectory)

results = mycursor.execute("SELECT * FROM songs")

for x in mycursor:
    print(x)


mycursor.close()

# CREATE TABLE characters (
# 	id INT NOT NULL AUTO_INCREMENT,
#     character_name VARCHAR(255),
#     fate_points INT,
#     high_concept VARCHAR(255),
#     trouble VARCHAR(255),
#     PRIMARY KEY (id));
#
# INSERT INTO characters (character_name, fate_points, high_concept, trouble)
# 	VALUES ('satan', 5, 'trickster boi', 'gambling addiction'),
# 		   ('coconuts', 1, 'salesman', 'tends to wander off'),
# 		   ('billiamton buxaplenty', 0, 'rich guy af', 'disdain for the poor');
#
# CREATE TABLE consequences (
# 	id INT NOT NULL AUTO_INCREMENT,
#     character_id INT NOT NULL,
# 		FOREIGN KEY (character_id) REFERENCES characters(id),
#     amount INT,
#     text VARCHAR(255),
#     checked INT,
#     PRIMARY KEY (id)
#     );
#
# INSERT INTO consequences (character_id, amount, text, checked) VALUES (3, 1, 'hobbled', 1);
# INSERT INTO consequences (character_id, amount, text, checked) VALUES (2, 5, 'cracked ribs', 1);
#
# CREATE TABLE aspects (
# 	id INT NOT NULL AUTO_INCREMENT,
#     character_id INT NOT NULL,
# 		FOREIGN KEY (character_id) REFERENCES characters(id),
# 	text VARCHAR(255),
#     PRIMARY KEY (id));
#
# INSERT INTO aspects (character_id, text) VALUES (2, 'couple extra coins'), (3, 'despises elves'), (3, 'out in the rain');
#
# SELECT * FROM characters
# INNER JOIN consequences ON characters.id = character_id
# INNER JOIN aspects ON aspects.character_id = characters.id;
#
# SELECT * FROM characters;
# SELECT * FROM aspects;

