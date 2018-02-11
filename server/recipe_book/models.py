from django.db import models


class RecipeComponent(models.Model):
    ITEM = 'ITEM'
    CUP = 'CUP'
    TBSP = 'TBSP'
    TSP = 'TSP'
    UNITS = [
        (ITEM, ITEM),
        (CUP, CUP),
        (TBSP, TBSP),
        (TSP, TSP),
    ]

    RECIPE = 'R'
    INGREDIENT = 'I'
    COMPONENTS = {
        RECIPE: 'Recipe',
        INGREDIENT: 'Ingredient',
    }

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=40, blank=True)
    unit_type = models.CharField(max_length=10, choices=UNITS)
    unit_cost = models.FloatField(null=True, blank=True)
    amount = models.FloatField(null=True, blank=True)
    component_type = models.CharField(max_length=2, choices=COMPONENTS.items())
    directions = models.TextField(blank=True)

    def __unicode__(self):
        return u'<{}: {}>'.format(
            self.COMPONENTS[self.component_type],
            self.name
        )


class IngredientAmount(models.Model):
    recipe = models.ForeignKey(RecipeComponent, related_name='ingredients')
    ingredient = models.ForeignKey(RecipeComponent, related_name='recipes')
    amount = models.FloatField()

    def __unicode__(self):
        return u'<IngredientAmount: {}, {}, {}>'.format(
            self.recipe,
            self.ingredient,
            self.amount
        )
