from app import app, login
from flask import render_template, flash, redirect, url_for
import mongoengine.errors

# from app.classes.data import Timer
# from app.classes.forms import TimerForm
# from flask_login import current_user
import time

@app.route('/countdownTimer')
def countdown():
    #   global timing
    #   def timer():
    #     #t = int(input("Please input time"))
    #     while t: 
    #         mins = t//60
    #         secs = t % 60 
    #         timer = '{:02d}:{:02d}'.format(mins,secs)
    #         #print(timer, end="\r")
    #         time.sleep(1)
    #         t -= 1

            return render_template('timerform.html')

