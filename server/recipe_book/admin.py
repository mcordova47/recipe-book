from django.contrib import admin

from .models import RecipeBook, RecipeComponent, IngredientAmount

admin.site.register(IngredientAmount)
admin.site.register(RecipeComponent)
admin.site.register(RecipeBook)
