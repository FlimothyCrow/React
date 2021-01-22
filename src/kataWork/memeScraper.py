import mysql.connector
from os import listdir
from os.path import isfile, join, getsize

cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Screwpep39",
    database="dbo"
)



def insertMemesFromDir(mycursor):
    mypath = "D:\Flim's Documents\Funnies\emergency funnies\private reserve"
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

    for fileName in onlyfiles:
        sql = 'INSERT INTO mehms (name, path, sizeKb) VALUES (%s, %s, %s)'
        mycursor.execute(sql, (fileName, mypath, getsize(join(mypath, fileName)) / 1000))

    cnx.commit()

def updateMehmsPaths(mycursor):
    mypath = "D:\Flim's Documents\Funnies\emergency funnies\private reserve"
    sql = 'UPDATE mehms SET path = %s'
    mycursor.execute(sql, (mypath, ))
    cnx.commit()


def deleteMehms(mycursor):
    sql = 'DELETE FROM mehms'
    mycursor.execute(sql)
    cnx.commit()

mycursor = cnx.cursor()

#deleteMehms(mycursor)
#insertMemesFromDir(mycursor)


#updateMehmsPaths()
results = mycursor.execute("SELECT * FROM mehms ORDER BY sizeKb DESC")
for x in mycursor:
    print(x)

mycursor.close()