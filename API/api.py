from flask import Flask, render_template, request, jsonify, make_response
import pandas as pd
from pandas import DataFrame
from sqlalchemy import create_engine
import pymysql, os

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

        # Test if user already exists
        users_df = DataFrame(data=pd.read_sql("SELECT * FROM users", conn), index=None)

        for name in users_df["username"]:
            if username == name:
                response = make_response('User with that username already exists')
                response.status_code = 207
                conn.close()
                return response

        # Insert new user
        cursor.execute('INSERT INTO users(username, password) VALUES (%s, %s);', (username, password))

        # Commit changes
        conn.commit()

    # If argument list is invalid respond as an error
    else:
        response = make_response('Invalid arguments')
        response.status_code = 206
        conn.close()
        return response

    # Produce displayable data
    cursor.execute('SELECT * from users')
    ret = cursor.fetchall()

    # Close connection
    conn.close()

    return jsonify(ret)

# Delete User (probably only used in a backend sense)
@app.route('/users/delete', methods=['GET'])
def delete_user():
    # Create connection to database
    conn = pymysql.connect(host='18.204.82.238', user='AppUser', password='@LymanOW!', db='soundscapedb')

    # Create cursor
    cursor = conn.cursor()

    # Check for valid parameters
    if "username" not in request.args.keys():
        response = make_response('There was no username parameter given')
        response.status_code = 208 # Username not passed
        conn.close()
        return response

    # Get the username
    username = request.args['username']

    # Delete from database
    cursor.execute("DELETE FROM `users` WHERE `username` = %s;", username)

    # Commit change
    conn.commit()

    # Get return value
    cursor.execute("SELECT * FROM users")
    ret = cursor.fetchall()

    #Close connection
    conn.close()

    return jsonify(ret)

# Run the application
app.run(host='0.0.0.0')