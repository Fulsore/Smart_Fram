from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    getAll, 
    getDatas, 
    getData, 
    Vegetable, 
    Masala, 
    Dairy, 
    Coffee, 
    Fruit, 
    Seed,
    Register,
    Login
    # User
)

urlpatterns = [
    # Product URLs
    path('api/products/', getAll, name='get_all_products'),
    path('api/products/category/<str:category>/', getDatas, name='get_products_by_category'),
    path('api/product/<int:pk>/', getData, name='get_product_by_id'),

    # Category-specific product URLs
    path('api/products/vegetables/', Vegetable, name='get_vegetable_products'),
    path('api/products/masalas/', Masala, name='get_masala_products'),
    path('api/products/dairy/', Dairy, name='get_dairy_products'),
    path('api/products/coffee/', Coffee, name='get_coffee_products'),
    path('api/products/fruit/', Fruit, name='get_fruit_products'),
    path('api/products/seed/', Seed, name='get_seed_products'),
    
    path("api/register/",Register.as_view()),
    path("api/login/",Login.as_view()),
    # path("api/user/",User.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)