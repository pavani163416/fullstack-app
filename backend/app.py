from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

client = MongoClient(os.getenv("MONGO_URI"))
db = client["fliprdb"]

projects = db.projects
clients = db.clients
contacts = db.contacts
subscribers = db.subscribers

@app.route("/")
def home():
    return "Backend Running"

@app.route("/projects", methods=["GET", "POST"])
def project_api():
    if request.method == "POST":
        projects.insert_one(request.json)
        return jsonify({"msg": "Project added"})
    return jsonify(list(projects.find({}, {"_id": 0})))

@app.route("/clients", methods=["GET", "POST"])
def client_api():
    if request.method == "POST":
        clients.insert_one(request.json)
        return jsonify({"msg": "Client added"})
    return jsonify(list(clients.find({}, {"_id": 0})))

@app.route("/contact", methods=["POST", "GET"])
def contact_api():
    if request.method == "POST":
        contacts.insert_one(request.json)
        return jsonify({"msg": "Contact saved"})
    return jsonify(list(contacts.find({}, {"_id": 0})))

@app.route("/subscribe", methods=["POST", "GET"])
def subscribe_api():
    if request.method == "POST":
        subscribers.insert_one(request.json)
        return jsonify({"msg": "Subscribed"})
    return jsonify(list(subscribers.find({}, {"_id": 0})))

if __name__ == "__main__":
    app.run(debug=True)
