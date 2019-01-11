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
#### `modulename.js`
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
* `PORT` - Port defined in ENV
* [`MONGODB_URI` (click)](mongodb://heroku_s1gcj03q:9v1bvdcga6aj1obn3ucucshle8@ds153304.mlab.com:53304/heroku_s1gcj03q)

#### Running the app
* `npm i` to install dependencies
* `npm start`
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

<!-- #### UML
Link to an image of the UML for your application and response to events -->
