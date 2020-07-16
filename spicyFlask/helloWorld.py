from markupsafe import escape
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/') # also called home page
def hello_world():
    return 'Hello, World!'


@app.route('/new')
def new_world():
    return 'new World!'

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % escape(username)

@app.route('/addTwoInputs/<int:numberInput0>/<int:numberInput1>') # <int:> converts numberInput(string) to an int
def addTwoInputs(numberInput0, numberInput1):
    toReturn = {"test":str(numberInput0 + numberInput1)}
    return jsonify(toReturn)

# SET FLASK_APP=helloWorld.py
# flask run