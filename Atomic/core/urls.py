from django.urls import path
from django.contrib.auth import views

from .views import *

urlpatterns = [
    path("", index, name="index")
]