from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from dotenv import load_dotenv
import pymongo
import os


load_dotenv()

user = os.getenv('MONGO_USER')
password = os.getenv('MONGO_PASSWORD')
host = os.getenv('MONGO_HOST')
db_name = os.getenv('MONGO_DB_NAME')

uri = f"mongodb+srv://{user}:{password}@{host}/?retryWrites=true&w=majority"
print(uri)

client = pymongo.MongoClient(settings.MONGO_URI)
database = client[settings.MONGO_DB_NAME]

# Create your views here.
# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")
print(client)
print(database)

def get_plats(request):
    plats_collection = database["plats"]

    # Compter le nombre de documents dans la collection
    num_plats = plats_collection.count_documents({})

    # Afficher le nombre de plats dans la console (pour le débogage)
    print(f"Nombre de plats dans la collection 'plats': {num_plats}")

    # Renvoyer une réponse JSON avec le nombre de plats
    return JsonResponse({"nombre_de_plats": num_plats})


# myclient = pymongo.MongoClient("mongodb+srv://admin:adminpasswordMongoDB77@cluster0.sp2ay.mongodb.net/")
# mydb = myclient["ExpressFood"]
# mycol = mydb["plats"]

# for x in mycol.find():
#   print(x)