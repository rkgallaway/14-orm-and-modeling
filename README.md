![CF](http://i.imgur.com/7v5ASc8.png) LAB 14
=================================================

## Lab 14 ORM and Modeling

### Author: Ryan Gallaway

### Links and Resources

[![Build Status](https://www.travis-ci.com/rkgallaway/14-orm-and-modeling.svg?branch=master)](https://www.travis-ci.com/rkgallaway/14-orm-and-modeling)

* [repo](https://github.com/rkgallaway/14-orm-and-modeling)
* [travis](https://www.travis-ci.com/search/14)
* [back-end](https://lab14-orm-modeling-rg.herokuapp.com)

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `middleware/404.js` -handes 404 error
#### `middleware/error.js` -handles 500 error
#### `middleware/model-finder.js` -finds model
#### `models/categories-schema.js` -establishes schema for categories model
#### `models/categories.js` extends datamodel class with categories
#### `models/model.js` cretaes datamodel class
#### `moedls/products-schema.js` -establishes schema for products model
#### `models/products.js`  extends datamodel class with products
#### `routes/v1.js.js` api route
#### `src/app.js` -runs app via index.js



##### Exported Values and Methods

### API Requirements
* Create middleware that will read the `/:model` parameter from a route and load the correct data model module
* Create a new `Model` class/interface to serve as the base for all models
* Convert the Category and Product interfaces to extend from the Model class
* Link the category and product mongo models, with the products being virtually populated into the categories
* Add a pre-save hook to both models to convert some element of the data (or to add content to a field) based on some condition.
  * Use your imagination, but make a few logical decisions for your store
  * e.g. Every price must end in .99 or Convert all product names to Title Case, etc.


### Setup
#### `.env` requirements
* `PORT` - Port defined in ENV or 3000
* [`MONGODB_URI` (click)](mongodb://heroku_s1gcj03q:9v1bvdcga6aj1obn3ucucshle8@ds153304.mlab.com:53304/heroku_s1gcj03q)

#### Running the app
* `npm i` to install dependencies
* terminal 1: start `mongod` run `mongo` DB
* terminal 2: `nodemon` to run server
* terminal 3: run `echo` commands to get, put, post, delete.  find command examples in `./src/routes/v1.js`

  
#### Tests
* npm test
* What assertions were made?
* What assertions need to be / should be made?

<!-- #### UML
Link to an image of the UML for your application and response to events -->
