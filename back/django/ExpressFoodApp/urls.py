from django.urls import re_path, path
from ExpressFoodApp import views

urlpatterns = [    
    path('', views.index),

    re_path(r'^plats$', views.platCRUD),
    re_path(r'^plats/([0-9]+)$', views.plat),
    
    re_path(r'^livreurs$', views.livreurCRUD),
    re_path(r'^livreurs/([0-9]+)$', views.livreur),
    
    re_path(r'^commandes$', views.commandeCRUD),
    re_path(r'^commandes/([0-9]+)$', views.commande),
    
    re_path(r'^clients$', views.clientCRUD),
    re_path(r'^clients/([0-9]+)$', views.client),
]
