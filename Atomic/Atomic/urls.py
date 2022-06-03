from django.contrib import admin
from django.urls import path

from core.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", index, name="index")
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('login/', auth_views.LoginView.as_view(template_name="login.html", authentication_form=UserLoginForm), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('workshops/', include('workshops.urls')),
    path('surveys/', include('surveys.urls')),
    path('', include('core.urls')),
    path('registration/', include('registration.urls'))
]
