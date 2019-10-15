# Express Routes -- Birds

![birds](https://media3.giphy.com/media/3o7Zen0xHZFjAFiQ1O/giphy.gif)

## Introduction:

Let's keep practicing creating express routes using the sequelize CLI!

## Instructions:

1. Fork and clone this repo.
1. `cd` into the directory and run `npm init -y` and `npx sequelize-cli init`.
1. Create a gitignore file that ignores your node modules.
1. Create a database called `birds_db`.
1. Use the Sequelize CLI to build out the models and seeds. Use the seed data in [this gist](https://gist.git.generalassemb.ly/romebeez/d3526a2998e3fcee9499420481b0529b) and look at the structure to figure out what needs to go in your models.
1. Create an Express server in the `server.js` file.
1. Create the following routes: 
- A root route which introduces us to your app.
- a `GET` route that displays all birds.
- a `GET` route that displays the bird with the corresponding id.
- a `GET` route that shows the type for each bird.
- a `GET` route that shows all the birds in the corresponding city, e.g. `/cities/New-York`.
- a `POST` route that allows you to create a new bird.
- a `PUT` route that allows you to edit a bird.
- a `DELETE` route that allows you to destroy a bird.

## BONUS:

Create a cities model that has the following properties: `name` (string), `country` (string), and `population` (integer). Create your own seed data and join the two models on `bird.city` and `city.name`. 

Create basic CRUD routes for the new resource as well as a GET route for the nested resources (e.g. `/city/:id/birds`)

### This homework is due 🚨 11PM TONIGHT 🚨
