from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse

from django.contrib.auth import authenticate, login

from ExpressFoodApp.models import *
from ExpressFoodApp.serializers import *

import random
from .task import update_order_and_driver_status

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
db_collect_users = os.getenv('MONGO_DTB_COLLECT_USERS')
db_collect_cmd = os.getenv('MONGO_DTB_COLLECT_CMD')
db_collect_livreurs = os.getenv('MONGO_DTB_COLLECT_LIVREURS')
db_collect_panier = os.getenv('MONGO_DTB_COLLECT_PANIERS')

# Connection to MngoDB
uri = f'mongodb+srv://{user}:{password}@{host}/'

# Default page
def index(request):
    return HttpResponse("API is running")

""" PLAT CRUD """
# get a plat
def plat(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_plats]
    plat = collection.find_one({"_id": ObjectId(id)})
    plat['_id'] = str(plat['_id'])
    return JsonResponse(plat, safe=False)

@csrf_exempt
def platCRUD(request):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_plats]
    
# get all plats
    if request.method == 'GET':
        plats = collection.find()
        plats_list = []
        for plat in plats:
            plat['_id'] = str(plat['_id'])
            plats_list.append(plat)
        return JsonResponse(plats_list, safe=False)
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
            # Find the dish with the specified _id.
            plat = collection.find_one({"_id": ObjectId(plats_data['_id'])})
            # Check if the dish exists.
            if plat is None:
                return JsonResponse("Dish does not exist", safe=False)
            # Update the dish's fields.
            for field, value in plats_data.items():
                if field != "_id":
                    collection.update_one({"_id": ObjectId(plats_data['_id'])}, {"$set": {field: value}}, upsert=False)
            return JsonResponse("Updated Successfully", safe=False)
# delete a plat
    elif request.method == 'DELETE':
        plats_data = JSONParser().parse(request)
        # Find the dish with the specified _id.
        plat = collection.find_one({"_id": ObjectId(plats_data['_id'])})
        # Check if the dish exists.
        if plat is None:
            return JsonResponse("Dish does not exist", safe=False)
        # Delete the dish.
        collection.delete_one({"_id": ObjectId(plats_data['_id'])})
        return JsonResponse("Deleted Successfully", safe=False)
    
""" LIVREUR CRUD """
# get a livreur
def livreur(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_livreurs]
    livreur = collection.find_one({"_id": ObjectId(id)})
    livreur['_id'] = str(livreur['_id'])
    return JsonResponse(livreur, safe=False)

@csrf_exempt
def livreurCRUD(request):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_livreurs]

# get all livreurs
    if request.method == 'GET':
        livreurs = collection.find()
        livreurs_list = []
        for livreur in livreurs:
            livreur['_id'] = str(livreur['_id'])
            livreurs_list.append(livreur)
        return JsonResponse(livreurs_list, safe=False)
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
        # Find the livreur with the specified _id.
        livreur = collection.find_one({"_id": ObjectId(livreurs_data['_id'])})
        # Check if the livreur exists.
        if livreur is None:
            return JsonResponse("Livreur does not exist", safe=False)
        # Update the livreur's fields.
        for field, value in livreurs_data.items():
            if field != "_id":
                collection.update_one({"_id": ObjectId(livreurs_data['_id'])}, {"$set": {field: value}}, upsert=False)
        return JsonResponse("Updated Successfully", safe=False)
# delete a livreur
    elif request.method == 'DELETE':
        livreurs_data = JSONParser().parse(request)
        # Find the livreur with the specified _id.
        livreur = collection.find_one({"_id": ObjectId(livreurs_data['_id'])})
        # Check if the livreur exists.
        if livreur is None:
            return JsonResponse("Livreur does not exist", safe=False)
        # Delete the livreur.
        collection.delete_one({"_id": ObjectId(livreurs_data['_id'])})
        return JsonResponse("Deleted Successfully", safe=False)

""" User CRUD """
# get a user
def user(request, id):
    # load the client
    Mongoclient = pymongo.MongoClient(uri)
    db = Mongoclient[db_name]
    collection = db[db_collect_users]
    user = collection.find_one({"_id": ObjectId(id)})
    user['_id'] = str(user['_id'])
    return JsonResponse(user, safe=False)

@csrf_exempt
def userCRUD(request):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_users]

# get all user    
    if request.method == 'GET':
        users = collection.find()
        user_list = []
        for user in users:
            user['_id'] = str(user['_id'])
            user_list.append(user)
        return JsonResponse(user_list, safe=False)
# add a user
    elif request.method == 'POST':
        user_data = JSONParser().parse(request)
        # insert with models
        user_serializer = UserSerialize(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add")
# update a user
    elif request.method == 'PUT':
        user_data = JSONParser().parse(request)
        # Find the user with the specified _id.
        user = collection.find_one({"_id": ObjectId(user_data['_id'])})
        # Check if the user exists.
        if user is None:
            return JsonResponse("user does not exist", safe=False)
        # Update the user's fields.
        for field, value in user_data.items():
            if field != "_id":
                collection.update_one({"_id": ObjectId(user_data['_id'])}, {"$set": {field: value}}, upsert=False)
        return JsonResponse("Updated Successfully", safe=False)
# delete a user
    elif request.method == 'DELETE':
        user_data = JSONParser().parse(request)
        # Find the user with the specified _id.
        user = collection.find_one({"_id": ObjectId(user_data['_id'])})
        # Check if the user exists.
        if user is None:
            return JsonResponse("user does not exist", safe=False)
        # Delete the user.
        collection.delete_one({"_id": ObjectId(user_data['_id'])})
        return JsonResponse("Deleted Successfully", safe=False)

    
""" PANIER CRUD """
# get a panier
def panier(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_panier]
    panier = collection.find_one({"_id": ObjectId(id)})
    panier['_id'] = str(panier['_id'])
    return JsonResponse(panier, safe=False)

@csrf_exempt
def panierCRUD(request):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_panier]
    
# get all paniers
    if request.method == 'GET':
        paniers = collection.find()
        paniers_list = []
        for panier in paniers:
            panier['_id'] = str(panier['_id'])
            paniers_list.append(panier)
        return JsonResponse(paniers_list, safe=False)
# add a panier
    elif request.method == 'POST':
        paniers_data = JSONParser().parse(request)
        # insert with pymongo
        collection.insert_one(paniers_data)
        return JsonResponse("Added Successfully", safe=False)
# update a panier
    elif request.method == 'PUT':
        paniers_data = JSONParser().parse(request)
        # Find the panier with the specified _id.
        panier = collection.find_one({"_id": ObjectId(paniers_data['_id'])})
        # Check if the panier exists.
        if panier is None:
            return JsonResponse("Panier does not exist", safe=False)
        for field, value in paniers_data.items():
            if field != "_id":
                collection.update_one({"_id": ObjectId(paniers_data['_id'])}, {"$set": {field: value}}, upsert=False)
        return JsonResponse("Updated Successfully", safe=False)
# delete a panier
    elif request.method == 'DELETE':
        paniers_data = JSONParser().parse(request)
        # Find the panier with the specified _id.
        panier = collection.find_one({"_id": ObjectId(paniers_data['_id'])})
        # Check if the panier exists.
        if panier is None:
            return JsonResponse("Panier does not exist", safe=False)
        # Delete the panier.
        collection.delete_one({"_id": ObjectId(paniers_data['_id'])})
        return JsonResponse("Deleted Successfully", safe=False)

    
""" COMMANDE CRUD """
# get a commande
def commande(request, id):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_cmd]
    commande = collection.find_one({"_id": ObjectId(id)})
    commande['_id'] = str(commande['_id'])
    return JsonResponse(commande, safe=False)

@csrf_exempt
def commandeCRUD(request):
    client = pymongo.MongoClient(uri)
    db = client[db_name]
    collection = db[db_collect_cmd]
    collection_livreurs = db[db_collect_livreurs]
    
# get all commandes  
    if request.method == 'GET':
        commandes = collection.find()
        commandes_list = []
        for commande in commandes:
            commande['_id'] = str(commande['_id'])
            commandes_list.append(commande)
        return JsonResponse(commandes_list, safe=False)
    
# add a commande
    elif request.method == 'POST':
        commandes_data = JSONParser().parse(request)
        available_livreurs = list(collection_livreurs.find({"availability": True}))
        if not available_livreurs:
            return JsonResponse("No available livreurs", safe=False)
        # Choisissez aléatoirement un livreur parmi les livreurs disponibles
        selected_livreur = random.choice(available_livreurs)
        # Mettez à jour le statut du livreur sélectionné à False
        collection_livreurs.update_one(
            {"_id": selected_livreur["_id"]},
            {"$set": {"availability": False}}
        )
        # Ajoutez la commande en associant le livreur sélectionné
        commandes_data["livreur"] = selected_livreur["_id"]
        collection.insert_one(commandes_data)

        # Planifiez la tâche pour mettre à jour le statut après 20 minutes
        #update_order_and_driver_status(str(commandes_data["_id"]),str(selected_livreur["_id"]),schedule=10)
        return JsonResponse("Added Successfully", safe=False)
    
# update a commande
    elif request.method == 'PUT':
        commandes_data = JSONParser().parse(request)
        # Find the commande with the specified _id.
        commande = collection.find_one({"_id": ObjectId(commandes_data['_id'])})
        # Check if the commande exists.
        if commande is None:
            return JsonResponse("Commande does not exist", safe=False)
        # Update the commande's fields.
        for field, value in commandes_data.items():
            if field != "_id":
                collection.update_one({"_id": ObjectId(commandes_data['_id'])}, {"$set": {field: value}}, upsert=False)
        return JsonResponse("Updated Successfully", safe=False)
# delete a commande
    elif request.method == 'DELETE':
        commandes_data = JSONParser().parse(request)
        # Find the commande with the specified _id.
        commande = collection.find_one({"_id": ObjectId(commandes_data['_id'])})
        # Check if the commande exists.
        if commande is None:
            return JsonResponse("Commande does not exist", safe=False)
        # Delete the commande.
        collection.delete_one({"_id": ObjectId(commandes_data['_id'])})
        return JsonResponse("Deleted Successfully", safe=False)
    
def login(request):
    user_data = JSONParser().parse(request)
    user = authenticate(request, username=user_data['username'], password=user_data['password'])
    if user is not None:
        login(request, user)
        return JsonResponse("Logged in Successfully", safe=False)
    else:
        return JsonResponse("Invalid credentials", safe=False)
    
def logout(request):
    logout(request)
    return JsonResponse("Logged out Successfully", safe=False)
