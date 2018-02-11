from django.conf.urls import include, url
from django.contrib import admin

from recipe_book.views import RecipeComponentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('recipes', RecipeComponentViewSet, base_name='recipes')

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
]
