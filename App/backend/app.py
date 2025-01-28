from flask import Flask
from routes import main as routes

app = Flask(__name__)

# Configuration settings can be added here
app.config['SECRET_KEY'] = 'your_secret_key'

# Register routes
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True)