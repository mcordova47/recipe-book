from rest_framework import viewsets
from .models import RecipeComponent
from .serializers import RecipeComponentSerializer


class RecipeComponentViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeComponentSerializer
    queryset = RecipeComponent.objects.all()
