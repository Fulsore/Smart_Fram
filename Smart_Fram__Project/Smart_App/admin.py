from django.contrib import admin
from .models import MyUser, Product, Cart

admin.site.register(MyUser)
admin.site.register(Product)
admin.site.register(Cart)
