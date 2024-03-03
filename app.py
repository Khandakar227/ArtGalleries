from flask import Flask, send_from_directory, request, jsonify
from db import get_users, init_db, insert_user
from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment


@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/api/v1/user', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data['name']
    email = data['email']
    business_name = data['business_name']
    result = insert_user(name, email, business_name)
    if result == "":
        return jsonify({"success": True}), 200
    else:
        return jsonify({"success": False, "error": result}), 500


@app.route('/api/v1/users', methods=['GET'])
def get_users_route():
    users = get_users()
    return jsonify(users)

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5001, use_reloader=True, threaded=True, debug=True)
