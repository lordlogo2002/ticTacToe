from dotenv import load_dotenv
import os

class Config:
    """
        Set Flask configuration vars from .env file
    """
    
    def __init__(self):
        load_dotenv()
        self.SECRET_KEY = os.getenv("SECRET_KEY", None)
        self.HOST = os.getenv("HOST", None)
        self.PORT = os.getenv("PORT", None)
        self.DEBUG_MODE = os.getenv("DEBUG_MODE", False)
        
        if self.SECRET_KEY is None:
            print("DEFAULT SECRET KEY TO 'SECRET_KEY'")
            self.SECRET_KEY = "SECRET_KEY"
            
        if self.HOST is None:
            print("DEFAULT HOST TO '127.0.0.1'")
            self.HOST = "127.0.0.1"
        
        if self.PORT is None:
            print("DEFAULT PORT TO '5000'")
            self.PORT = 5000
            
        if self.DEBUG_MODE is None:
            print("DEFAULT DEBUG MODE TO 'False'")
            self.DEBUG_MODE = False
    
    def get_flask_setup(self):
        return { 
            "host": self.HOST,
            "port": self.PORT,
            "debug": self.DEBUG_MODE
        }

CONFIG = Config()
