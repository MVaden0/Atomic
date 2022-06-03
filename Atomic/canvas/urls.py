from django.urls import path

from .views import *

urlpatterns = [
    path("", canvas_page, name="canvas-page")
]