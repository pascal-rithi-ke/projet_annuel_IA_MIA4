from django.db import models

# Create your models here.
class Plats(models.Model):
    name: models.CharField(max_length=100)
    description: models.CharField(max_length=100)
    price: models.FloatField()
    quantity: models.IntegerField()
    availability: models.BooleanField()
    type: models.CharField(max_length=100)
    
class Livreur(models.Model):
    name: models.CharField(max_length=100)
    availability: models.BooleanField()

class Client(models.Model):
    name: models.CharField(max_length=100)
    email: models.CharField(max_length=100)
    password: models.CharField(max_length=100)

class Commande(models.Model):
    date: models.DateField()
    time: models.TimeField()
    client: models.ForeignKey(Client, on_delete=models.CASCADE)
    livreur: models.ForeignKey(Livreur, on_delete=models.CASCADE)
    plat: models.ForeignKey(Plats, on_delete=models.CASCADE)