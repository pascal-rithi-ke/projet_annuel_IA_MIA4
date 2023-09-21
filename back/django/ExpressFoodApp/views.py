from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse

from ExpressFoodApp.models import *
from ExpressFoodApp.serializers import *

# Default page
def index(request):
    return HttpResponse("API is running")

@csrf_exempt
def plat(request, id):
    if request.method == 'GET':
        plat = Plats.objects.get(id=id)
        plat_serializer = PlatsSerialize(plat)
        return JsonResponse(plat_serializer.data, safe=False)

''' Plats - CRUD '''
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


@csrf_exempt
def livreur(request, id):
    if request.method == 'GET':
        livreur = Livreur.objects.get(id=id)
        livreur_serializer = LivreurSerialize(livreur)
        return JsonResponse(livreur_serializer.data, safe=False)

''' Livreur - CRUD '''
def livreurCRUD(request):
# get all livreurs
    if request.method == 'GET':
        livreurs = Livreur.objects.all()
        livreurs_serializer = LivreurSerialize(livreurs, many=True)
        return JsonResponse(livreurs_serializer.data, safe=False)
# get a livreur
    if request.method == 'GET':
        livreur = Livreur.objects.get(id=id)
        livreur_serializer = LivreurSerialize(livreur)
        return JsonResponse(livreur_serializer.data, safe=False)
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


@csrf_exempt
def client(request, id):
    if request.method == 'GET':
        client = Client.objects.get(id=id)
        client_serializer = ClientSerialize(client)
        return JsonResponse(client_serializer.data, safe=False)

''' Client - CRUD '''
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
    
    
''' Commande '''
@csrf_exempt
# get a commande & update status adter 5 seconds
def commande(request, id):
    if request.method == 'GET':
        commande = Commande.objects.get(id=id)
        commande_serializer = CommandeSerialize(commande)
        return JsonResponse(commande_serializer.data, safe=False)
    
''' Commande - CRUD '''
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