from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.
class Plats(models.Model):
    name = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=100, default='')
    price = models.FloatField(default=0)
    quantity = models.IntegerField(default=0)
    availability = models.BooleanField(default=True)
    type = models.CharField(max_length=100, default='')
    
class Livreur(models.Model):
    name = models.CharField(max_length=100, default='')
    availability = models.BooleanField(default=True)

class Client(models.Model):
    name = models.CharField(max_length=100, default='')
    email = models.CharField(max_length=100, default='')
    password = models.CharField(max_length=100, default='')

    def save(self, *args, **kwargs):
        self.password = make_password(self.password)
        super(Client, self).save(*args, **kwargs)

#class Commande(models.Model):
#    date = models.DateField(auto_now_add=True, blank=True)
#    client = models.ForeignKey(Client, on_delete=models.CASCADE)
#    livreur = models.ForeignKey(Livreur, on_delete=models.CASCADE)
#    plats = models.ManyToManyField(Plats)  # Utilisation de ManyToManyField pour les plats
#    status = models.CharField(max_length=100, default='')
#    price_total = models.FloatField(default=0)

#class Panier(models.Model):
#    date = models.DateField(auto_now_add=True, blank=True)
#    client = models.ForeignKey(Client, on_delete=models.CASCADE)
#    plats = models.ManyToManyField(Plats)  # Utilisation de ManyToManyField pour les plats dans le panier
#    price_total = models.FloatField(default=0)