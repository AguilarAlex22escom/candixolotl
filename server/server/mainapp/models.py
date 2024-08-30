from django.db import models
from django.contrib.auth import get_user_model
import random, string

User = get_user_model()

BRAND_CHOICES = (
    ("AIcholotl", "AICHOLOTL"),
    ("Vero", "VERO"),
    ("De la Rosa", "DE_LA_ROSA"),
)

KIND_CHOICES = (
    ("Cacahuate", "PEANUTS"),
    ("Chocolate", "CHOCOLATE"),
    ("Gomitas", "GUMMIES"),
    ("Botana", "SNACK"),
    ("Dulce Mexicano", "MEXICAN_CANDY"),
    ("Exótico", "EXOTIC")
)

FLAVOR_CHOICES = ((
    ("Enchilado", "HOT"),
    ("Cremoso", "CREAMY"),
    ("Ácidito", "ACID"),
    ("Salado", "SALTY"),
    ("Frutal", "FRUITY")
))

# Create your models here.

class Customer(models.Model):
    # customer_id = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    names = models.CharField(max_length=30, default="")
    last_names = models.CharField(max_length=30, default="")
    birth_date = models.DateField(auto_now=False, auto_now_add=False)
    user_name = models.CharField(max_length=50, unique=True)
    email = models.CharField(max_length=254, unique=True)
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "customers"

    def __str__(self):
        return self.names

class Product(models.Model):
    name = models.CharField(max_length=30, null=False)
    kind = models.CharField(max_length=20, choices=KIND_CHOICES, default="GUMMIES")
    description = models.TextField(blank=False)
    brand = models.CharField(max_length=15, choices=BRAND_CHOICES, default="AIcholotl")
    unit_grammage = models.DecimalField(max_digits=6, decimal_places=3, default=000.000)
    image = models.ImageField(null=True, blank=True, upload_to="products/")
    price = models.DecimalField(max_digits=4, decimal_places=2, default=00.00)
    units = models.IntegerField()
    serie = models.CharField(max_length=4, default=f"{random.choice(string.ascii_letters)}{random.choice(string.ascii_letters)}{random.randint(0, 9)}{random.randint(0, 9)}",unique=True)
    created_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "products"

    def __str__(self):
        return f"{self.name} - {self.brand};"