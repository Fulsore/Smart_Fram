from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model, authenticate
from .models import Product
from .serializers import ProductSerializer, MyUserSerializer, LoginSerializer
from rest_framework.views import APIView
from rest_framework import authentication, permissions
from django.contrib.auth import get_user_model
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authtoken.models import Token


User = get_user_model()
@api_view(['GET'])
def getAll(request):
    """Get all products."""
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def getDatas(request, category):
    """Get products by category."""
    products = Product.objects.filter(product_category=category)
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def getData(request, pk):
    """Get a product by primary key."""
    product = Product.objects.get(pk=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

# Category-specific views
@api_view(['GET'])
def Vegetable(request):
    """Get all products in the 'Vegetable' category."""
    products = Product.objects.filter(product_category="vegetables")
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def Masala(request):
    """Get all products in the 'Masala' category."""
    products = Product.objects.filter(product_category="masalas")
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def Dairy(request):
    """Get all products in the 'Dairy' category."""
    products = Product.objects.filter(product_category="dairy")
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def Coffee(request):
    """Get all products in the 'Coffee' category."""
    products = Product.objects.filter(product_category="coffee")
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def Fruit(request):
    products = Product.objects.filter(product_category="fruits")
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

@api_view(['GET'])
def Seed(request):
    products = Product.objects.filter(product_category="seeds")
    serializer = ProductSerializer(products, many=True)
    return Response({'Data': serializer.data})

class Register(APIView):
    def post(self, request):
        serializer = MyUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'Data': serializer.data, 'Message': 'User created successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Login(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            user = authenticate(email=email, password=password)

            if user is not None:
                return Response(
                    {'message': 'User logged in successfully.'},
                    status=status.HTTP_200_OK
                )
            else:
                return Response({'message': 'Invalid credentials.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

                            
