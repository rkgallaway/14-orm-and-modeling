# LAB - API Server

## Before you begin
* You will be continuing to work on your API server
* Provided for you is a working server, which you may use as a starter

## Assignment
### API Requirements
* Create middleware that will read the `/:model` parameter from a route and load the correct data model module
* Create a new `Model` class/interface to serve as the base for all models
* Convert the Category and Product interfaces to extend from the Model class
* Link the category and product monglo models, with the products being virtually populated into the categories
* Add a pre-save hook to both models to convert some element of the data (or to add content to a field) based on some condition.
  * Use your imagination, but make a few logical decisions for your store
  * e.g. Every price must end in .99 or Convert all product names to Title Case, etc.

### Stretch Goal
* Add a sub-document to the `products` model called `social`
  * This should have 2 fields: `shares` and `likes`, both Numeric
  * On the UI, add a share and a like link that would update this sub-document on each product when clicked.

### Deployment
* Your server must be deployed at Heroku
* Deploy the modularized and monolithic versions separately
  * Each branch can go to a separate Heroku Dyno
* Your routes should all be testable remotely

### Testing
* Write a complete set of tests for all data models, independent of the server
* For testing the server and routes, use `supertest` to do end-to-end testing
  * What we're testing is not whether express works, but whether your routes are doing the correct things.
* Your tests must be running green on travis.com

###  Documentation
* Complete the README.md file included in the lab folder
* Be sure to include the URLs to your server, api docs, and jsdocs at Heroku
* Write JSDoc for every function
* Create a `docs` folder 
* Put an updated swagger.json file in that folder
* Run `jsdoc` and target the doc folder as the target for the build.
