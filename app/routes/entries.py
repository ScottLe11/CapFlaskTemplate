from app import app, login
import mongoengine.errors
from flask import render_template, flash, redirect, url_for
from flask_login import current_user
from app.classes.data import Entry
from app.classes.forms import EntryForm
from flask_login import login_required
import datetime as dt


@app.route('/entries/all')
@login_required
def entryAll():
    entries = Entry.objects()
    return render_template('entries.html',entries=entries)
 
 
@app.route('/entry/<entryID>')
@login_required
def entry(entryID):
    thisEntry = Entry.objects.get(id=entryID)
    return render_template('entry.html',entry=thisEntry)
 
 
@app.route('/entries/delete/<entryID>')
@login_required
def entryDelete(entryID):
    deleteEntry = Entry.objects.get(id=entryID)
    if current_user == deleteEntry.author:
        deleteEntry.delete()
        flash('The Entry :) was deleted.')
    else:
        flash("You can't delete a entry :) you don't own.")
    entries = Entry.objects()  
    return render_template('entries.html',entries=entries)


@app.route('/entries/new', methods=['GET', 'POST'])
@login_required
def entryNew():
    form = EntryForm()
    if form.validate_on_submit():
        newEntry = Entry(
            completed = form.completed.data,
            reflection = form.reflection.data,
            author = current_user.id,
            modifydate = dt.datetime.utcnow
        )
        newEntry.save()
        return redirect(url_for('entry',entryID=newEntry.id))
    return render_template('entryForm.html',form=form)

@app.route('/entry/edit/<entryID>', methods=['GET', 'POST'])
@login_required
def entryEdit(entryID):
    editEntry = Entry.objects.get(id=entryID)
    if current_user != editEntry.author:
        flash("You can't edit a Entry :) you don't own.")
        return redirect(url_for('entry',entryID=entryID))
    form = EntryForm()
    if form.validate_on_submit():
        editEntry.update(
            completed = form.completed.data,
            reflection = form.reflection.data,
            modifydate = dt.datetime.utcnow
        )
        return redirect(url_for('entry',entryID=entryID))
    form.completed.data = editEntry.completed
    form.reflection.data = editEntry.reflection
    return render_template('entryForm.html',form=form)






