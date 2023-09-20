from django.urls import re_path, path
from ExpressFoodApp import views

urlpatterns = [    
    path('', views.index),

    re_path(r'^plats$', views.platApi),
    re_path(r'^plats/([0-9]+)$', views.platApi),
]
