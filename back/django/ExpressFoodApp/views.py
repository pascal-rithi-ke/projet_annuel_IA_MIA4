from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse

from ExpressFoodApp.models import *
from ExpressFoodApp.serializers import *

# Create your views here.

def index(request):
    return HttpResponse("API is running")

#Plats
@csrf_exempt
def platApi(request):
    if request.method == 'GET':
        plats = Plats.objects.all()
        plats_serializer = PlatsSerialize(plats, many=True)
        return JsonResponse(plats_serializer.data, safe=False)
    elif request.method == 'POST':
        plats_data = JSONParser().parse(request)
        plats_serializer = PlatsSerialize(data=plats_data)
        if plats_serializer.is_valid():
            plats_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        plats_data = JSONParser().parse(request)
        plats = Plats.objects.get(id=plats_data['id'])
        plats_serializer = PlatsSerialize(plats, data=plats_data)
        if plats_serializer.is_valid():
            plats_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update")
    elif request.method == 'DELETE':
        plats_data = JSONParser().parse(request)
        plats = Plats.objects.get(id=plats_data['id'])
        plats.delete()
        return JsonResponse("Deleted Successfully", safe=False)