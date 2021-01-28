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

"""
CREATE TABLE artists (
		id INT NOT NULL AUTO_INCREMENT, 
		band_name VARCHAR(255),
        PRIMARY KEY (id));

CREATE TABLE songs (
		id INT NOT NULL AUTO_INCREMENT, 
		song_name VARCHAR(255),
        PRIMARY KEY (id));
        
SELECT s.id AS songs_id
	FROM songs AS s
	INNER JOIN artists_X_songs AS axs
    ON s.id = axs.song_id
    INNER JOIN artists AS a
    ON axs.artist_id = a.id
    WHERE s.id = 20;


INSERT INTO artists_X_songs (song_id, artist_id) VALUES (20, 1), (20, 2);

CREATE TABLE artists_X_songs (
		song_id INT NOT NULL,
        artist_id INT NOT NULL,
        FOREIGN KEY (song_id) REFERENCES songs (id),
        FOREIGN KEY (artist_id) REFERENCES artists (id));
        
SELECT * FROM songs 
	INNER JOIN artists_x_songs ON songs.id = artists_x_songs.song_id
    INNER JOIN artists ON artists.id = artists_x_songs.artist_id
    WHERE artists.id = 1;
	
ALTER TABLE artists
CHANGE COLUMN old_name TO new_name;

SELECT * FROM SONGS;
SELECT * FROM artists;

INSERT INTO artists_X_songs (song_id, artist_id) VALUES (37, 1), (37, 2), (30, 2);
INSERT INTO artists_X_songs (song_id, artist_id) VALUES (35, 1), (33, 1), (30, 2);


ALTER TABLE songs ADD song_length INT NOT NULL;
ALTER TABLE artists ADD date_started INT NOT NULL;

UPDATE artists SET date_started = 1962 WHERE band_name = "Stevie Ray Vaughan";




"""