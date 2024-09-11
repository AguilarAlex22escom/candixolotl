from rest_framework import viewsets, status, permissions
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from .serializers import CustomerSerializer, ProductSerializer
from .models import Customer, Product

from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

# Create your views here.
class CustomerView(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@api_view(["POST"])
def signup(request):
    serializer = CustomerSerializer(data=request.data)
    print(request.data)
    # print(serializer)

    if serializer.is_valid():
        serializer.save()
        customer = User.objects.get(username=serializer.data["username"])
        customer.set_password(serializer.data["password"])
        customer.save()

        token = Token.objects.create(user=customer)
        customer.save()
        return Response(data={"token": token.key, "customer": serializer.data}, status=status.HTTP_201_CREATED)
    else:
        print("There's an error here:")
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login(request):
    customer = get_object_or_404(User, username=request.data["username"])
    if not customer.check_password(request.data["password"]):
        return Response({"error": "Invalid password"}, status=status.HTTP_400_BAD_REQUEST)

    token, created = Token.objects.get_or_create(user=customer)
    serializer = CustomerSerializer(instance=customer)
    return Response({"token": token.key, "customer": serializer.data}, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    serializer = CustomerSerializer(instance=user)
    return Response(data=serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    request.user.auth_token.delete()
    if(Token.DoesNotExist):
        return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_200_OK)

'''
class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        data = request.data
        email = request.data.get("email")
        psw = request.data.get("psw")
        user = authenticate(email=email, psw=psw)
        print(user)

        if user is not None:
            return Response(
                {
                    "names": user.names,
                    "last_names": user.last_names,
                    "birth_date": user.birth_date,
                    "user_name": user.user_name,
                    "email": user.email,
                    "psw": user.psw,
                    "created_at": user.created_at,
                }, status=status.HTTP_200_OK
            )
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
'''
        
