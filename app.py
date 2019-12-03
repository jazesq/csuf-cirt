from flask import Flask, render_template, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy 
from send_mail import send_mail

app = Flask(__name__, static_url_path= '/static/')

ENV = 'dev'

if ENV == 'dev':
	app.debug = True
	app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:omar@localhost/CIRT'
else:
	app.debug = False
	app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://zzwclbuhtrqtgs:92780220de8289e61ab53cae0872062aff64e682f3f73427cf3c1b951c6ca118@ec2-174-129-253-113.compute-1.amazonaws.com:5432/d2r7ms27gb15gs'
	
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#db = SQLAlchemy(app)

# class CIRT(db.Model):
	# __tablename__ = 'Student'
	# id = db.Column(db.Integer, primary_key=True)
	# student = db.Column(db.String(200), unique = True)
	# #for other things to add:
	# #student = db.Column(db.String(200))
	# #change student to something else.
	
	# def __init__(self, student):
		# self.student = student

@app.route('/',methods=['GET'])
def index():
#	return app.send_static_file('index.html/')
	return render_template('index.html')


	
	

	
# @app.route('/submit', methods=['POST'])
# def submit():
	# if request.method == 'POST':
		# student = request.form['student']
		# print(student)
		# if student == '':
			# return render_template('index.html')
			
		# if db.session.query(CIRT).filter(CIRT.student == student).count() == 0: #change logical statement for error checking
			# data = CIRT(student) #add more than student for more data
			# db.session.add(data)
			# db.session.commit()
			# send_mail(student) #this sends email
			# return render_template('success.html')
		# return render_template('index.html')
		
		


if __name__ == '__main__':
	app.run()
