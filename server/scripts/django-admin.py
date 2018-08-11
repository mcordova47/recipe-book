#!C:\dev\projects\recipe-book\server\env\Scripts\python.exe
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

import sys
sys.path.insert(0,'C:/dev/projects/recipe-book/server')

import django
django.setup()

from django.core import management

if __name__ == "__main__":
    management.execute_from_command_line()
