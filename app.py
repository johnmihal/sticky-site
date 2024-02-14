from flask import Flask, render_template, redirect, url_for, request, jsonify
from pymongo import MongoClient
import secrets_1
import datetime

app = Flask(__name__)
client = MongoClient(secrets_1.mongodblink)
db = client.CoolDatabaseName
collection = db.CoolCollectionName
placeholder_img = "static/sticky.jpg"

@app.route("/",methods=['GET'])
def home():
    print("get recieved!")

    print(collection.count_documents({}))
    obj = collection.find()
    print(obj[2])



    return render_template("index.html", img = obj[2]["img"])

@app.route('/',methods=['POST'])
def post():
    print("i recived a post request!")
    content = request.json
    content["date"] = datetime.datetime.now(tz=datetime.timezone.utc)
    print(content)

    img_obj = collection.insert_one(content).inserted_id
    print(img_obj)
    return render_template("index.html")