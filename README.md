# recipe-book

## A UI for Managing Recipes
Reads recipes from a Django server and displays as either a list view or a detail view.  Filter recipes via the search box and use the slide-out panel to quickly navigate to another recipe.  Recipe directions use markdown

## Development
The front end is written using [Purescript](http://www.purescript.org/) with [purescript-pux](http://purescript-pux.org/).  The server side is written with Python and Django.

### Django Server
Set up virtual environment

    $ virtualenv env
    $ env/Scripts/activate
    $ pip install -r requirements.txt

Run django server

    $ python manage.py runserver

DB Migrations

    $ python manage.py makemigrations
    $ python manage.py migrate

Connect to Cloud SQL via proxy

    $ cloud_sql_proxy -instances=recipe-book-194820:us-east1:recipebook=tcp:3306 -credential_file=recipe-book-credentials.json

### Webpack dev server
Dev buid with hot module reloading

      $ npm start

## Production
The front end is hosted on github pages

    $ git subtree push --prefix client/static origin gh-pages

The server is hosted on google app engine

    $ pip install -r requirements-vendor.txt -t lib
    $ python manage.py collectstatic
    $ gcloud app deploy
