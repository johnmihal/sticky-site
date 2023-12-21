from flask import Flask, render_template, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

@app.route("/")
def home():
    client = MongoClient("url goes here")
    db = client.test_database
    collection = db.test_collection


    return render_template("index.html")

@app.route('//post',methods=['POST'])
def post():
    return render_template("index.html")