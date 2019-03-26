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

The server is hosted on heroku

    $ git subtree push --prefix server heroku master
