from django.shortcuts import render
from django.http import HttpResponse

# Home page
def index(request):
    return HttpResponse("Api is running")

# Get all plats
def get_plats(request):
    return HttpResponse("Plats")