from app import app
from flask_cors import CORS

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

## API Routes ##
from cookit_api.blueprints.users.views import users_api_blueprint
from cookit_api.blueprints.admins.views import admins_api_blueprint
from cookit_api.blueprints.sessions.views import sessions_api_blueprint
from cookit_api.blueprints.meals.views import meals_api_blueprint


app.register_blueprint(users_api_blueprint, url_prefix='/api/v1/users')
app.register_blueprint(admins_api_blueprint, url_prefix='/api/v1/admins')
app.register_blueprint(sessions_api_blueprint, url_prefix='/api/v1/sessions')
app.register_blueprint(meals_api_blueprint, url_prefix='/api/v1/meals')