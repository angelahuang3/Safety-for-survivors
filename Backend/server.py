# Import flask and datetime module for showing date and time
import psycopg2
from flask import Flask, render_template, request, session, redirect, url_for, flash, jsonify, abort
import datetime
from flask_cors import CORS, cross_origin
from flask_session import Session

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)
CORS(app, support_credentials=True)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
# Route for seeing a data
@app.route('/data')
def get_time():
	# Returning an api for showing in reactjs
	return jsonify({
		'Name':"geek",
		"Age":"22",
	    "Date":x,
	    "programming":"python"
    })
########
@app.route('/main', methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def get_user_info():
	if request.method == "GET":
		print("GET method")
		return "Main page...(pending)"
	if request.method == "POST":
		print("POST method")
		req=request.get_json(silent=True)
		print(request.get_json()["password"])
		print(request.get_json()["userEmail"])



		user = 'postgres'
		pw = 'vamsi'

		conn = psycopg2.connect(
		host="localhost",
		database="flask_db",
		user=user,  # os.environ['DB_USERNAME'],
			 		password=pw)  # os.environ['DB_PASSWORD'])
		print("here")
	# Open a cursor to perform database operations
		cur = conn.cursor()
		print(type(req['userEmail']))
		cur.execute('INSERT INTO  LOGINS(Email) VALUES (%s)',(req['userEmail'],))
		cur.execute('select COUNT(*) from USERS where email=(%s) and password=(%s)', (req['userEmail'],req['password']))

		for table in cur.fetchall():
			if table[0]<1:
				conn.commit()
				cur.close()
				conn.close()
				print("failed")
				return 'fail',200
				#need to modify

		session["name"] = req["userEmail"]
		print("success")
		conn.commit()

		cur.close()
		conn.close()
		return "success",200
#
# Running app
if __name__ == '__main__':
	app.run(debug=True)