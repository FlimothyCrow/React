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
musicDirectory = "C:\\Users\Timothy\Desktop\\target music\\Stevie Ray Vaughan"

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
        sql = 'INSERT INTO songs (song_name) VALUES (%s)'
        mycursor.execute(sql, (fileName,))
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

