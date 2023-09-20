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
def platApi(request, id=0):
    if request.method == 'GET':
        plats = Plats.objects.all()
        plats_serializer = PlatsSerialize(plats, many=True)
        return JsonResponse(plats_serializer.data, safe=False)
    if request.method == 'GET':
        plats = Plats.objects.filter(id=id)
        plats_serializer = PlatsSerialize(plats, many=True)
        return JsonResponse(plats_serializer.data, safe=False)
    elif request.method == 'POST':
        plat_data = JSONParser().parse(request)
        plat_serializer = PlatsSerialize(data=plat_data)
        if plat_serializer.is_valid():
            plat_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'PUT':
        plat_data = JSONParser().parse(request)
        try:
            plat = Plats.objects.get(id=id)
        except Plats.DoesNotExist:
            return JsonResponse("Plats not found", status=404)
        
        plat_serializer = PlatsSerialize(plat, data=plat_data)
        if plat_serializer.is_valid():
            plat_serializer.save()
            return JsonResponse("Updated Successfully", safe=False)
        return JsonResponse("Failed to Update", safe=False)
    elif request.method == 'DELETE':
        try:
            plat = Plats.objects.get(id=id)
            plat.delete()
            return JsonResponse("Deleted Successfully", safe=False)
        except Plats.DoesNotExist:
            return JsonResponse("Plats not found", status=404)