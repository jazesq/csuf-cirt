from flask import Flask, render_template, request, send_from_directory
from flask_sqlalchemy import SQLAlchemy 
from send_mail import send_mail

app = Flask(__name__, static_url_path= '/static/')

ENV = 'prod'

if ENV == 'dev':
	app.debug = True
	app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:omar@localhost/CIRT'
else:
	app.debug = False
	app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://zzwclbuhtrqtgs:92780220de8289e61ab53cae0872062aff64e682f3f73427cf3c1b951c6ca118@ec2-174-129-253-113.compute-1.amazonaws.com:5432/d2r7ms27gb15gs'
	
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class CIRT(db.Model):
	__tablename__ = 'SafetyEscort'
#	id = db.Column(db.Integer, primary_key=True)
	fName = db.Column(db.String(15), unique=False)
	lName= db.Column(db.String(20), unique=False)
	cWID = db.Column(db.Integer, primary_key=True, unique = False)
	eMail = db.Column(db.String(100), unique = False)
	descClothes = db.Column(db.String(200), unique = False)
	partySize = db.Column(db.Integer, unique = False)
	currentLoc = db.Column(db.String(200), unique = False)
	destination = db.Column(db.String(200), unique = False)
	#student = db.Column(db.String(200), unique = True)
	#for other things to add:
	#student = db.Column(db.String(200))
	#change student to something else.
	
	# def __init__(self, student, ):
		# self.student = student
		
	def __init__(self, fName, lName, cWID, pNum, eMail, descClothes, partySize, currentLoc, destination):
	#	self.student = student
		self.fName = fName
		self.lName = lName
		self.cWID = cWID
		self.pNum = pNum
		self.eMail = eMail
		self.descClothes = descClothes
		self.partySize = partySize
		self.currentLoc = currentLoc
		self.destination = destination
		
		

@app.route('/', methods=['GET'])
def index():
#	return app.send_static_file('index.html/')
	return render_template('index.html')


	
	

	
@app.route('/onsubmit', methods=['POST'])
def onsubmit():
#	if request.method == 'POST':
	fName = request.form['fName']
	lName = request.form['lName']
	cWID = request.form['iD']
	pNum = request.form['pNum']
	eMail = request.form['eMail']
	descClothes = request.form['descClothes']
	partySize = request.form['partySize']
	currentLoc = request.form['currentLoc']
	destination = request.form['destination']
	#	print(cWid)
	if cWID == '':
		return render_template('index.html')
			
		# if db.session.query(CIRT).filter(CIRT.cWid == cWid).count() == 0: #change logical statement for error checking
			# data = CIRT(fName, lName, cWID, pNum, eMail, descClothes, partySize, currentLoc, destination) #add more than student for more data
			# db.session.add(data)
			# db.session.commit()
			# send_mail(cWid) #this sends email
			# return render_template('success.html')
			
	data = CIRT(fName, lName, cWID, pNum, eMail, descClothes, partySize, currentLoc, destination) #add more than student for more data
	db.session.add(data)
	db.session.commit()
	send_mail(fName, lName, cWID, pNum, eMail, descClothes, partySize, currentLoc, destination) #this sends email
	return render_template('success.html')
		
		


if __name__ == '__main__':
#	app.debug = False;
	app.run()
