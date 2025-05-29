from flask import Flask, request
from pymongo import MongoClient
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

client = MongoClient(os.getenv('MONGO_URI'))
db = client["userDB"]
collection = db["users"]

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form
    collection.insert_one({"name": data['name'], "email": data['email']})
    return "Stored in MongoDB", 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
