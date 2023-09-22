from rest_framework import serializers
from ExpressFoodApp.models import *

class PlatsSerialize(serializers.ModelSerializer):
    class Meta:
        model = Plats
        fields = '__all__'
        
class LivreurSerialize(serializers.ModelSerializer):
    class Meta:
        model = Livreur
        fields = '__all__'

class ClientSerialize(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

#class PanierSerialize(serializers.ModelSerializer):
#    class Meta:
#        model = Panier
#        fields = '__all__'        

#class CommandeSerialize(serializers.ModelSerializer):
#    class Meta:
#        model = Commande
#        fields = '__all__'