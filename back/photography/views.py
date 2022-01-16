from django.http import HttpResponse
from .models import *
from django.shortcuts import render, get_object_or_404


def index(request):
    latest_film_list = Film.objects.order_by('id')
    latest_camera_list = Camera.objects.order_by('id')
    context = {'latest_film_list': latest_film_list, 'latest_camera_list': latest_camera_list}
    return render(request, 'photography/index.html', context)
    #return HttpResponse("Hello, world. You're at the photography index.")

def camera(request, camera_id):
    return HttpResponse("%d" % camera_id)

def film(request):
    latest_film_list = Film.objects.order_by('id')
    context = {'latest_film_list': latest_film_list}
    return render(request, 'photography/film.html', context)