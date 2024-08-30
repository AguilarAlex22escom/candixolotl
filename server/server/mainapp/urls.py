from django.urls import path, include, re_path
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import CustomerView, ProductView
from .views import signup, login, profile, logout

router = routers.DefaultRouter()
router.register(r"customers", CustomerView, "customers")
router.register(r"products", ProductView, "products")

urlpatterns = [
    path("v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="API Documentation")),
    re_path("v1/login/", login),
    re_path("v1/signup/", signup),
    re_path("v1/profile/", profile),
    re_path("v1/logout/", logout),
]
