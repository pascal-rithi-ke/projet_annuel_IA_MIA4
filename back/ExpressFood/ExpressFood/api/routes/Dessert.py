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

    # On récupère le plat correspondant à l'id
    plat = collection.find_one({"_id": ObjectId(id)})

    # Conversion ObjectID to str
    plat['_id'] = str(plat['_id'])

    # On renvoie le plat au format JSON
    return JsonResponse(plat, safe=False)

def get_dessert(request, id):
    # On se connecte à la base de données
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collection2]

    # On récupère le dessert correspondant à l'id
    dessert = collection.find_one({"_id": ObjectId(id)})

    # Conversion ObjectID to str
    dessert['_id'] = str(dessert['_id'])

    # On renvoie le dessert au format JSON
    return JsonResponse(dessert, safe=False)
