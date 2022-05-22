from django.urls import path
from . import views

app_name = 'photography'
urlpatterns = [
    path('', views.index, name='index'),
    path('camera/<int:camera_id>/', views.camera, name="camera"),
    path('film/<int:film_id>/', views.film, name="film"),
]