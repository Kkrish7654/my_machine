from django.urls import path
from . import views
urlpatterns = [
    path("user", views.ViewModel.get_user_details, name="get_user_details"),
    path("add_script", views.ViewModel.as_view(), name="add_script")
]
