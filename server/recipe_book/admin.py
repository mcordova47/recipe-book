from django.contrib import admin

from .models import RecipeComponent, IngredientAmount

admin.site.register(IngredientAmount)
admin.site.register(RecipeComponent)
