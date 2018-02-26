from rest_framework import serializers
from .models import RecipeComponent, IngredientAmount

class IngredientAmountSerializer(serializers.ModelSerializer):
    class Meta:
        model = IngredientAmount
        fields = ('ingredient', 'amount', 'unit_type')

class RecipeComponentSerializer(serializers.ModelSerializer):
    ingredients = IngredientAmountSerializer(many=True, read_only=True)

    class Meta:
        model = RecipeComponent
        fields = ('id', 'name', 'category', 'unit_type', 'unit_cost', 'amount', 'component_type', 'directions', 'ingredients')
