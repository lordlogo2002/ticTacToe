from website import app
from website.config import CONFIG

def main():
    app.secret_key = CONFIG.SECRET_KEY
    app.run(**CONFIG.get_flask_setup())

if __name__ == '__main__':
    main()
