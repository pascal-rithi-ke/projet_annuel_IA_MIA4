from django.http import JsonResponse

from dotenv import load_dotenv
from service.mongo import get_mongodb_connect

from bson import ObjectId
import json

import os
import pymongo

load_dotenv()

db_name = os.getenv('MONGO_DB_NAME')
db_collect_plats = os.getenv('MONGO_DB_COLLECT_PLATS')

def get_plats():    
    # On se connecte à la base de données
    uri = get_mongodb_connect()
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_plats]
    # Conversion ObjectID to str pour chaque document
    plats = list(collection.find())
    for plat in plats:
        plat['_id'] = str(plat['_id'])
    return JsonResponse(plats, safe=False)

def get_plat(request, id):
    client = get_mongodb_connect()
    db = client[db_name]
    collection = db[db_collect_plats]
    plat = collection.find_one({"_id": ObjectId(id)})
    plat['_id'] = str(plat['_id'])
    return JsonResponse(plat, safe=False)