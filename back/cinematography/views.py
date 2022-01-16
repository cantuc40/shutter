from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the cinematography index.")

def camera(request, camera_id):
    return HttpResponse("%s" % camera_id)

def film(request, film_id):
    return HttpResponse("%s" % film_id)

