from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from dotenv import load_dotenv
from bson import ObjectId

load_dotenv()

# Home page
def index(request):
    return HttpResponse("Api is running")