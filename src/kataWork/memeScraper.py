import mysql.connector
from os import listdir
from os.path import isfile, join, getsize

cnx = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Screwpep39",
    database="dbo"
)

memeDirectory = "D:\Flim's Documents\Funnies\emergency funnies\private reserve"
legoDirectory = "D:\\temporary funnies\photos\\nostalgia\\toys\lego"

def insertToDir(mycursor, mypath, table):
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    for fileName in onlyfiles:
        sql = 'INSERT INTO {} (catalog_id, set_name) VALUES (%s, %s)'.format(table)
        mycursor.execute(sql, (fileName[0: 4], fileName[5:]))
    cnx.commit()

def updateTablePaths(mycursor, mypath, table):
    sql = 'UPDATE {} SET path = %s'.format(table)
    mycursor.execute(sql, (mypath, ))
    cnx.commit()

def deleteTable(mycursor, table):
    sql = 'DELETE FROM {}'.format(table)
    mycursor.execute(sql)
    cnx.commit()

mycursor = cnx.cursor()

# insertToDir(mycursor, legoDirectory, "lego")
# deleteTable(mycursor, "lego")

#updateMehmsPaths()
results = mycursor.execute("SELECT * FROM lego WHERE set_name LIKE '%au%'")
for x in mycursor:
    print(x)

mycursor.close()