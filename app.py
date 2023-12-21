from flask import Flask, render_template, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

@app.route("/",methods=['GET'])
def home():
    client = MongoClient("url goes here")
    db = client.test_database
    collection = db.test_collection


    return render_template("index.html")

@app.route('/',methods=['POST'])
def post():
    print("i recived a post request!")
    return render_template("index.html")