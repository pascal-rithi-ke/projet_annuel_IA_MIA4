from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse

from ExpressFoodApp.models import *
from ExpressFoodApp.serializers import *

# Utilisation de pymongo pour la gestion des requetes spéciales + avec id
import pymongo
from bson.objectid import ObjectId
from dotenv import load_dotenv
import os

# Load env variables
load_dotenv()

user = os.getenv("MONGO_USER")
password = os.getenv("MONGO_PASSWORD")
host = os.getenv("MONGO_HOST")
db_name = os.getenv('MONGO_DTB_NAME')

db_collect_plats = os.getenv('MONGO_DTB_COLLECT_PLATS')
db_collect_clients = os.getenv('MONGO_DTB_COLLECT_CLIENTS')
db_collect_cmd = os.getenv('MONGO_DTB_COLLECT_CMD')
db_collect_livreurs = os.getenv('MONGO_DTB_COLLECT_LIVREURS')

# Connection to MngoDB
uri = f'mongodb+srv://{user}:{password}@{host}/'

# Default page
def index(request):
    return HttpResponse("API is running")

# Plat CRUD
@csrf_exempt
# get a plat
def plat(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_plats]
    plat = collection.find_one({"_id": ObjectId(id)})
    plat['_id'] = str(plat['_id'])
    return JsonResponse(plat, safe=False)

def platCRUD(request):
# get all plats
    if request.method == 'GET':
        plats = Plats.objects.all()
        plats_serializer = PlatsSerialize(plats, many=True)
        return JsonResponse(plats_serializer.data, safe=False)
# add a plat
    elif request.method == 'POST':
        plats_data = JSONParser().parse(request)
        plats_serializer = PlatsSerialize(data=plats_data)
        if plats_serializer.is_valid():
            plats_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add")
# update a plat
    elif request.method == 'PUT':
        plats_data = JSONParser().parse(request)
        plats = Plats.objects.get(id=plats_data['id'])
        plats_serializer = PlatsSerialize(plats, data=plats_data)
        if plats_serializer.is_valid():
            plats_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
# delete a plat
    elif request.method == 'DELETE':
        plats_data = JSONParser().parse(request)
        plats = Plats.objects.get(id=plats_data['id'])
        plats.delete()
        return JsonResponse("Deleted Successfully", safe=False)


#Livreur - CRUD
@csrf_exempt
# get a livreur
def livreur(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_livreurs]
    livreur = collection.find_one({"_id": ObjectId(id)})
    livreur['_id'] = str(livreur['_id'])
    return JsonResponse(livreur, safe=False)

def livreurCRUD(request):
# get all livreurs
    if request.method == 'GET':
        livreurs = Livreur.objects.all()
        livreurs_serializer = LivreurSerialize(livreurs, many=True)
        return JsonResponse(livreurs_serializer.data, safe=False)
# add a livreur
    elif request.method == 'POST':
        livreurs_data = JSONParser().parse(request)
        livreurs_serializer = LivreurSerialize(data=livreurs_data)
        if livreurs_serializer.is_valid():
            livreurs_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add")
# update a livreur
    elif request.method == 'PUT':
        livreurs_data = JSONParser().parse(request)
        livreurs = Livreur.objects.get(id=livreurs_data['id'])
        livreurs_serializer = LivreurSerialize(livreurs, data=livreurs_data)
        if livreurs_serializer.is_valid():
            livreurs_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
# delete a livreur
    elif request.method == 'DELETE':
        livreurs_data = JSONParser().parse(request)
        livreurs = Livreur.objects.get(id=livreurs_data['id'])
        livreurs.delete()
        return JsonResponse("Deleted Successfully", safe=False)

#Client - CRUD
@csrf_exempt
# get a client
def client(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_clients]
    client = collection.find_one({"_id": ObjectId(id)})
    client['_id'] = str(client['_id'])
    return JsonResponse(client, safe=False)

def clientCRUD(request):
# get all clients
    if request.method == 'GET':
        clients = Client.objects.all()
        clients_serializer = ClientSerialize(clients, many=True)
        return JsonResponse(clients_serializer.data, safe=False)
# get a client
    if request.method == 'GET':
        client = Client.objects.get(id=id)
        client_serializer = ClientSerialize(client)
        return JsonResponse(client_serializer.data, safe=False)
# add a client
    elif request.method == 'POST':
        clients_data = JSONParser().parse(request)
        clients_serializer = ClientSerialize(data=clients_data)
        if clients_serializer.is_valid():
            clients_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add")
# update a client
    elif request.method == 'PUT':
        clients_data = JSONParser().parse(request)
        clients = Client.objects.get(id=clients_data['id'])
        clients_serializer = ClientSerialize(clients, data=clients_data)
        if clients_serializer.is_valid():
            clients_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
# delete a client
    elif request.method == 'DELETE':
        clients_data = JSONParser().parse(request)
        clients = Client.objects.get(id=clients_data['id'])
        clients.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    
    
#Commande - CRUD
@csrf_exempt
# get a commande
def commande(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_cmd]
    commande = collection.find_one({"_id": ObjectId(id)})
    commande['_id'] = str(commande['_id'])
    return JsonResponse(commande, safe=False)
    
def commandeCRUD(request):
# get all commandes
    if request.method == 'GET':
        commandes = Commande.objects.all()
        commandes_serializer = CommandeSerialize(commandes, many=True)
        return JsonResponse(commandes_serializer.data, safe=False)
# add a commande
    elif request.method == 'POST':
        commandes_data = JSONParser().parse(request)
        commandes_serializer = CommandeSerialize(data=commandes_data)
        if commandes_serializer.is_valid():
            commandes_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add")
# update a commande
    elif request.method == 'PUT':
        commandes_data = JSONParser().parse(request)
        commandes = Commande.objects.get(id=commandes_data['id'])
        commandes_serializer = CommandeSerialize(commandes, data=commandes_data)
        if commandes_serializer.is_valid():
            commandes_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
# delete a commande
    elif request.method == 'DELETE':
        commandes_data = JSONParser().parse(request)
        commandes = Commande.objects.get(id=commandes_data['id'])
        commandes.delete()
        return JsonResponse("Deleted Successfully", safe=False)