from pyexpat import model
from unicodedata import name
from django.db import models

class Camera(models.Model):
    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    format = models.CharField(max_length=200)
    lens_mount = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=1000, decimal_places=2)

class Film(models.Model):
    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    format = models.CharField(max_length=200)
    type = models.CharField(max_length=200)
    iso = models.DecimalField(max_digits=1000, decimal_places=0)
    exposures = models.DecimalField(max_digits=1000, decimal_places=0)
    number_of_rolls = models.DecimalField(max_digits=10, decimal_places=0)
    price = models.DecimalField(max_digits=1000, decimal_places=2)
