# project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Admin panel URL
    path('admin/', admin.site.urls),
    
    # Include the URLs from the 'app' app
    path('', include('Smart_App.urls')),  # Here, 'app' refers to the name of your app
]
