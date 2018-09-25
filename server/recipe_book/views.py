from rest_framework import viewsets
from rest_framework import views
from rest_framework import status
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from .models import RecipeComponent
from .serializers import RecipeComponentSerializer, UserSerializer

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class RecipeComponentViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeComponentSerializer

    def get_queryset(self):
        user = self.request.user
        return RecipeComponent.objects.filter(book__users=user)

class UserCreate(views.APIView):
    permission_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return Response({ 'token': token }, status=status.HTTP_201_CREATED)
