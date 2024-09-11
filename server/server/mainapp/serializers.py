from rest_framework import serializers
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from .models import Customer, Product

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "first_name", "last_name", "password"]

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        # fields = ['name', 'kind', 'brand', 'price', 'units', 'unit_grammage', 'image']