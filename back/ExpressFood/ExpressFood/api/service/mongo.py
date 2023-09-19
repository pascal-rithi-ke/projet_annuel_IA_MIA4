from dotenv import load_dotenv
from pymongo import MongoClient
import os

load_dotenv()

def get_mongodb_connect():
    try:
        # Récupérer les informations de l'environnement
        user = os.getenv('MONGO_USER')
        password = os.getenv('MONGO_PASSWORD')
        host = os.getenv('MONGO_HOST')

        # Construire l'URI de connexion
        uri = f"mongodb+srv://{user}:{password}@{host}/?retryWrites=true&w=majority"

        # Essayer de se connecter à MongoDB
        client = MongoClient(uri)
        client.server_info()  # Vérifier la connexion

        # Si la connexion réussit renvoit la connexion
        print("Connexion à MongoDB réussie")
        return uri
    
    except Exception as e:
        # Gérer les erreurs de connexion ici
        print(f"Erreur de connexion à MongoDB : {str(e)}")
        return None