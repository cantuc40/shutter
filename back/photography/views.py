from django.http import HttpResponse
from .models import *
from django.shortcuts import render, get_object_or_404


def index(request):
    latest_film_list = Film.objects.order_by('id')
    latest_camera_list = Camera.objects.order_by('id')
    context = {'latest_film_list': latest_film_list, 'latest_camera_list': latest_camera_list}
    return render(request, 'photography/index.html', context)


def camera(request, camera_id):
    camera = Camera.objects.get(pk=camera_id)
    context = {'camera': camera}
    return render(request, 'photography/camera.html', context)



def film(request, film_id):
    film = Film.objects.get(pk=film_id)
    context = {'film': film}
    return render(request, 'photography/film.html', context)