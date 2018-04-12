# recipe-book

## A UI for Managing Recipes

### Features
* List view of all recipes by category
* Detail views of each recipe
* Filter recipes with the search box
* Calculates cost of recipes based on ingredients
* Recipe directions support markdown for basic text formatting as well as tooltips for referenced ingredients
* Recipes can be used as ingredients, in which case they will render as a link to the referenced recipe
* Side-panel to quickly scan for recipes

### TODO
* View for editing recipes
* View for editing ingredients
* Multi-user support

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

    $ cloud_sql_proxy -instances=recipe-book-194820:us-east1:recipebook=tcp:3306 -credential_file="./recipe-book-credentials.json"

### Webpack dev server
Dev buid with hot module reloading

      $ npm start

## Production
The front end is hosted on github pages

    $ npm run deploy

The server is hosted on google app engine

    $ pip install -r requirements-vendor.txt -t lib
    $ python manage.py collectstatic
    $ gcloud app deploy
