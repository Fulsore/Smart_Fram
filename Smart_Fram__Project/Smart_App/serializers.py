from rest_framework import serializers
from .models import MyUser, Product, Cart, Order, Review, Payment
from rest_framework_simplejwt.tokens import RefreshToken

# Serializer for User
class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ['id', 'email', 'username', 'password', 'user_type', 'is_active', 'is_admin']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return MyUser.objects.create_user(**validated_data)
    
class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    
    class Meta:
        model = MyUser
        fields = ['email', 'password']
        


# Serializer for Product
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

# Serializer for Cart
class CartSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()  # Display user email
    product = serializers.StringRelatedField()  # Display product name

    class Meta:
        model = Cart
        fields = '__all__'

# Serializer for Order
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

# Serializer for Review
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

# Serializer for Payment
class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'
