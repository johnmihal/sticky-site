from flask import Flask, render_template, redirect, url_for
from pymongo import MongoClient
import secrets

app = Flask(__name__)


@app.route("/",methods=['GET'])
def home():
    client = MongoClient(secrets.mongodblink)
    db = client.CoolDatabaseName
    collection = db.CoolCollectionName


    return render_template("index.html")

@app.route('/',methods=['POST'])
def post():
    print("i recived a post request!")
    return render_template("index.html")