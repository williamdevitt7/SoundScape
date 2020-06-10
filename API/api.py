from flask import Flask, render_template, request, jsonify, make_response
import pandas as pd
from pandas import DataFrame
import pymysql

# Create the application instance
app = Flask(__name__)

# RESPONSE STATUS CODE DICTIONARY
status_codes = {
    'OK': 200,
    'invalid_admin': 205,
    'invalid_args': 206,
    'username_exists': 207,
    'no_username': 208,
    'no_password': 209,
    'bad_login': 210
}

# Documentation
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# View Users
@app.route('/users', methods=['POST'])
def users():
    # Secure access
    with open("admin.txt") as f:
        if 'admin' not in request.args.keys() or request.args.get('admin') != f.readline().strip():
            response = make_response('Incorrect admin password')
            response.status_code = status_codes['invalid_admin']
            return response

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
@app.route('/users/add,', methods=['POST'])
def add_user():
    # Secure access
    with open("admin.txt") as f:
        if 'admin' not in request.args.keys() or request.args.get('admin') != f.readline().strip():
            response = make_response('Incorrect admin password')
            response.status_code = status_codes['invalid_admin']
            return response

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
                response.status_code = status_codes['username_exists']
                conn.close()
                return response

        # Insert new user
        cursor.execute('INSERT INTO users(username, password) VALUES (%s, %s);', (username, password))

        # Commit changes
        conn.commit()

    # If argument list is invalid respond as an error
    else:
        response = make_response('Invalid arguments')
        response.status_code = status_codes['invalid_args']
        conn.close()
        return response

    # Produce displayable data
    cursor.execute('SELECT * from users')
    ret = cursor.fetchall()

    # Close connection
    conn.close()

    return jsonify(ret)

# Delete User (probably only used in a backend sense)
@app.route('/users/delete', methods=['POST'])
def delete_user():
    # Secure access
    with open("admin.txt") as f:
        if 'admin' not in request.args.keys() or request.args.get('admin') != f.readline().strip():
            response = make_response('Incorrect admin password')
            response.status_code = status_codes['invalid_admin']
            return response

    # Create connection to database
    conn = pymysql.connect(host='18.204.82.238', user='AppUser', password='@LymanOW!', db='soundscapedb')

    # Create cursor
    cursor = conn.cursor()

    # Check for valid parameters
    if "username" not in request.args.keys():
        response = make_response('There was no username parameter given')
        response.status_code = status_codes['no_username']
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

@app.route('/login', methods=['POST'])
def login():
    # Secure access
    with open("admin.txt") as f:
        if 'admin' not in request.args.keys() or request.args.get('admin') != f.readline().strip():
            response = make_response('Incorrect admin password')
            response.status_code = status_codes['invalid_admin']
            return response

        # Create connection to database
        conn = pymysql.connect(host='18.204.82.238', user='AppUser', password='@LymanOW!', db='soundscapedb')

        # Create cursor
        cursor = conn.cursor()

        # Check for valid parameters
        username = ''
        password = ''

        if 'username' in request.args.keys():
            username = request.args.get('username')

        else:
            response = make_response('There was no username parameter given')
            response.status_code = status_codes['no_username']
            conn.close()
            return response

        if 'password' in request.args.keys():
            password = request.args.get('password')

        else:
            response = make_response('There was no password parameter given')
            response.status_code = status_codes['no_password']
            conn.close()
            return response

        # Query database for user information and determine in login successful
        user = DataFrame(data=pd.read_sql("SELECT * FROM users WHERE `username`='%s' AND `password`='%s'" % (username, password), conn), index=None)

        if user.empty:
            response = make_response('Login credentials incorrect')
            response.status_code = status_codes['bad_login']
            conn.close()
            return response

        # Close connection
        conn.close()

        # Return user's information
        return jsonify(user.to_json(orient='records')) # TODO BUG WHERE THERE ARE ESCAPE CHARACTERS IN THE JSON

# Run the application
app.run(host='0.0.0.0')