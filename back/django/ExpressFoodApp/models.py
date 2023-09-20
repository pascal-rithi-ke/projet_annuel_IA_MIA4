from django.db import models

# Create your models here.
class Plats(models.Model):
    name = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=100, default='')
    price = models.FloatField(default=0)
    quantity = models.IntegerField(default=0)
    availability = models.BooleanField(default=False)
    type = models.CharField(max_length=100, default='')
    
class Livreur(models.Model):
    name = models.CharField(max_length=100, default='')
    availability = models.BooleanField(default=False)

class Client(models.Model):
    name = models.CharField(max_length=100, default='')
    email = models.CharField(max_length=100, default='')
    password = models.CharField(max_length=100, default='')

class Commande(models.Model):
    date = models.DateField(default='')
    time = models.TimeField(default='')
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    livreur = models.ForeignKey(Livreur, on_delete=models.CASCADE)
    plat = models.ForeignKey(Plats, on_delete=models.CASCADE)