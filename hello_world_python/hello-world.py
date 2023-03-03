from flask import Flask, jsonify

app = Flask(__name__)

# Define a list of dictionaries containing article information
articles = [
    {"id": 1, "name": "Article 1"},
    {"id": 2, "name": "Article 2"},
    {"id": 3, "name": "Article 3"},
    {"id": 4, "name": "Article 4"},
    {"id": 5, "name": "Article 5"},
    {"id": 6, "name": "Article 6"},
    {"id": 7, "name": "Article 7"},
    {"id": 8, "name": "Article 8"},
    {"id": 9, "name": "Article 9"},
    {"id": 10, "name": "Article 10"},
]

@app.route("/")
def hello():
    # Convert the list of dictionaries to JSON format using jsonify
    return jsonify(articles)

if __name__ == "__main__":
    app.run(host="0.0.0.0")
