from django.urls import re_path, path
from ExpressFoodApp import views

urlpatterns = [    
    path('', views.index),

    re_path(r'^plats$', views.platCRUD),
    re_path(r'^plat/([^/]+)$', views.plat),
    
    re_path(r'^clients$', views.clientCRUD),
    re_path(r'^client/([^/]+)$', views.client),
    
    re_path(r'^livreurs$', views.livreurCRUD),
    re_path(r'^livreur/([^/]+)$', views.livreur),
    
    re_path(r'^paniers$', views.panierCRUD),
    re_path(r'^panier/([^/]+)$', views.panier),
    
    re_path(r'^commandes$', views.commandeCRUD),
    re_path(r'^commande/([^/]+)$', views.commande),
    
    re_path(r'^login$', views.login),
    re_path(r'^logout$', views.logout),
]
