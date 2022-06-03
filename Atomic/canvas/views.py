from django.shortcuts import render


def canvas_page(request):
    return render(request, "canvas_page.html")