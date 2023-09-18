from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from dotenv import load_dotenv
from bson import ObjectId

import pymongo
import os
import json

load_dotenv()

user = os.getenv('MONGO_USER')
password = os.getenv('MONGO_PASSWORD')
host = os.getenv('MONGO_HOST')

db_name = os.getenv('MONGO_DB_NAME')
db_collection = os.getenv('MONGO_DB_COLLECTION')
db_collection2 = os.getenv('MONGO_DB_COLLECTION2')

uri = f"mongodb+srv://{user}:{password}@{host}/?retryWrites=true&w=majority"

# Home page
def index(request):
    return HttpResponse("Api is running")

# Get all plats
def get_plats(request):    
    # On se connecte à la base de données
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collection]

    # Conversion ObjectID to str pour chaque document
    plats = list(collection.find())
    for plat in plats:
        plat['_id'] = str(plat['_id'])
    
    # On renvoie les plats au format JSON
    return JsonResponse(plats, safe=False)

# Get all desserts
def get_desserts(request):    
    # On se connecte à la base de données
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collection2]

    # Conversion ObjectID to str pour chaque document
    desserts = list(collection.find())
    for dessert in desserts:
        dessert['_id'] = str(dessert['_id'])
    
    # On renvoie les desserts au format JSON
    return JsonResponse(desserts, safe=False)