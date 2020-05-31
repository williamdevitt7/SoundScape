from flask import Flask, render_template, request, jsonify, make_response
import pandas as pd
import pymysql, sqlalchemy, os

# Create the application instance
app = Flask(__name__)

# Documentation
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# View Users
@app.route('/users', methods=['GET'])
def users():
    # Create connection to database
    conn = pymysql.connect(host='18.204.82.238', user='AppUser', password='@LymanOW!', db='soundscapedb')

    # Create cursor
    cursor = conn.cursor()

    # Produce displayable data
    cursor.execute('SELECT * from users')
    ret = cursor.fetchall()

    # Close connection
    conn.close()

    return jsonify(ret)

# Add user
@app.route('/users/add', methods=['GET'])
def add_user():
    # Create connection to database
    conn = pymysql.connect(host='18.204.82.238', user='AppUser', password='@LymanOW!', db='soundscapedb')

    # Create cursor
    cursor = conn.cursor()

    # Check for valid arguments passing
    if 'username' in request.args.keys() and 'password' in request.args.keys():
        # Retrieve args
        username = request.args['username']
        password = request.args['password']

        # Insert new user
        cursor.execute('INSERT INTO users(username, password) VALUES (%s, %s);', (username, password))

    # If argument list is invalid respond as an error
    else:
        make_response('Invalid arguments', 406)

    # Produce displayable data
    cursor.execute('SELECT * from users')
    ret = cursor.fetchall()

    # Close connection
    conn.close()

    return jsonify(ret)

# Run the application
app.run(host='0.0.0.0')