from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import RecipeComponent, IngredientAmount

class IngredientAmountSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngredientAmount
        fields = ('ingredient', 'amount', 'unit_type')

class RecipeComponentSerializer(serializers.ModelSerializer):
    ingredients = IngredientAmountSerializer(many=True, read_only=True)

    class Meta:
        model = RecipeComponent
        fields = (
            'id',
            'name',
            'category',
            'unit_type',
            'unit_cost',
            'amount',
            'component_type',
            'directions',
            'ingredients',
            'cups_to_lbs',
        )

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8)
    confirm_password = serializers.CharField(min_length=8)

    def create(self, validated_data):
        email = ''
        user = User.objects.create_user(
            validated_data['username'],
            email,
            validated_data['password']
        )
        return user

    def validate(self, data):
        if not data.get('password') or not data.get('confirm_password'):
            raise serializers.ValidationError("Missing password.")

        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords don't match.")

        return data

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'confirm_password')
