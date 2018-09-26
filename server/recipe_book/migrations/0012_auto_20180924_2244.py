# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-09-25 02:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('recipe_book', '0011_auto_20180924_2220'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipecomponent',
            name='book',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to='recipe_book.RecipeBook'),
            preserve_default=False,
        ),
    ]