# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-09-25 02:15
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipe_book', '0010_auto_20180810_2331'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeBook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='recipecomponent',
            name='book',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, related_name='recipes', to='recipe_book.RecipeBook'),
            preserve_default=False,
        ),
    ]
