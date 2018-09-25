from rest_framework import viewsets
from rest_framework import views
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

from .models import RecipeComponent
from .serializers import RecipeComponentSerializer, UserSerializer

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class RecipeComponentViewSet(viewsets.ModelViewSet):
    serializer_class = RecipeComponentSerializer
    queryset = RecipeComponent.objects.all()

class UserCreate(views.APIView):
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                payload = jwt_payload_handler(user)
                token = jwt_encode_handler(payload)
                return Response({ 'token': token }, status=status.HTTP_201_CREATED)
