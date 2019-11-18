import smtplib
from email.mime.text import MIMEText

def send_mail(student): #add more than student  for sending more info
	port = 2525 
	smtp_server = 'smtp.mailtrap.io'
	login = '62bf0e51415b00'
	password = '283c1c391283ad'
	message = f"<h3>New Feedback Submission</h3><ul><li>Student: {student}</li></ul>" 
	#to add more than student go to minute 32 of video
	
	sender_email = 'jazminesqueda53@yahoo.com' #change to email we will use
	reciever_email = 'ee5f17e391-8c5914@inbox.mailtrap.io'
	msg = MIMEText(message, 'html')
	msg['Subject'] = 'Issue Reporting'
	msg['From'] = sender_email
	msg['To'] = reciever_email
	
	#Sending email
	with smtplib.SMTP(smtp_server, port) as server:
		server.login(login, password)
		server.sendmail(sender_email, reciever_email, msg.as_string())
