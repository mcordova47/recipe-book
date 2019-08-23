# recipe-book

[![Netlify Status](https://api.netlify.com/api/v1/badges/630061e6-1346-42c6-92cb-91891e2e1f03/deploy-status)](https://app.netlify.com/sites/myrecipebook/deploys)

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

The front end is written in [Purescript](http://www.purescript.org/) with [purescript-pux](http://purescript-pux.org/).  The server side is written in [Haskell](https://www.haskell.org/).

### Server

Run server

    $ stack build --exec api

DB Migrations

Migrations are handled with [golang-migrate](https://github.com/golang-migrate/migrate)

    $ migrate -path /path/to/server/migrations -database $env:DATABASE_URL up

### Client

Generate PureScript types

    $ stack build --exec bridge

Install dependencies

    $ npm install

Dev build with hot module reloading

      $ npm start

## Production

The front end is hosted on netlify.  Builds are deployed on each commit to master.

Experiencing problems with netlify, so the ad-hoc way for now is using github pages (https://mcordova47.github.io/recipe-book):

```console
git push --delete origin gh-pages
git checkout -b gh-pages
cd client
npm run build-production
cd ..
git subtree push --prefix client/dist origin gh-pages
```

The server is hosted on heroku

    $ git subtree push --prefix server heroku master

If this fails, may need to:

    $ git push heroku `git subtree split --prefix website master`:master --force

Migrate production

    $ migrate -path migrations -database $(heroku config:get DATABASE_URL --app recipebook-api) up
