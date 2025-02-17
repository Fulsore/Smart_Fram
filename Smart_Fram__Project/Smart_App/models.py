from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class MyUserManager(BaseUserManager):
    def create_user(self, email, password=None, username=None, user_type=None):
        if not email:
            raise ValueError("Users must have an email address")
        
        user = self.model(email=self.normalize_email(email), username=username, user_type=user_type)
        user.set_password(password)  # This automatically hashes the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, username=None, user_type=None):
        user = self.create_user(email, password=password, username=username, user_type=user_type)
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True  # Superuser must be staff
        user.save(using=self._db)
        return user

class MyUser(AbstractBaseUser):
    email = models.EmailField(verbose_name="email address", max_length=255, unique=True)
    username = models.CharField(max_length=255, blank=True, null=True)  # Optional field for username
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    user_type = models.CharField(max_length=50, choices=[('farmer', 'Farmer'), ('customer', 'Customer')])

    objects = MyUserManager()

    USERNAME_FIELD = "email"  # Email will be the username
    REQUIRED_FIELDS = ['username']  # Ensure to include username if it is required

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


# Product Model
class Product(models.Model):
    CATEGORY_CHOICES = [
        ('vegetables', 'Vegetables'),
        ('fruits', 'Fruits'),
        ('masalas', 'Masalas'),
        ('dairy', 'Dairy'),
        ('seeds', 'Seeds'),
        ('coffee', 'Coffee'),
    ]

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    product_category = models.CharField(max_length=100, choices=CATEGORY_CHOICES, null=True, blank=True)
    product_info = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    stock_count = models.IntegerField(null=True, blank=True, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    product_id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

# Cart Model
class Cart(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    added_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.product.name}"

# Order Model
class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    order_date = models.DateTimeField(auto_now_add=True)
    shipping_address = models.TextField()

    def __str__(self):
        return f"Order {self.id} by {self.user.email}"

# Review Model
class Review(models.Model):
    user = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=3, decimal_places=2)
    review_text = models.TextField(null=True, blank=True)
    review_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.user.email} for {self.product.name}"

# Payment Model
class Payment(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    payment_date = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20)
    payment_method = models.CharField(max_length=20)

    def __str__(self):
        return f"Payment for Order {self.order.id} - {self.payment_status}"
