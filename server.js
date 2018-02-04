// Require the Express Module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

// Angular app 
app.use(express.static(__dirname + '/public/dist/' )); // <-- MAKE SURE YOU name YOUR Angular as "public", 
// or UPDATE this path appropriate to what you named your Angular directory.

// Mongoose config require
require('./server/config/mongoose.js');

// Require route for server.js
var routes_setter = require('./server/config/routes.js');
// Invoke route
routes_setter(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
  });

app.listen(8000, function() {
    console.log('Listening to port 8000');
})

// ONCE CREATED SERVER FILES:
// 1. RUN: ng new public (this creates Angular app in "public" folder)
// THIS creates our angular-app in "public" directory, and the package.json with Angular dependencies (node-modules folder).
// 2. cd INTO "public" DIRECTORY AND RUN:
// a) npm install --save @angular-devkit/core 
// b) npm install
// c) ng build --watch
// THIS creates our dist folder and starts Angular (Angular watches for any changes in "dist" folder!)
// 3. WITHIN "public" now RUN: ng g s http
// THIS creates our http.service.ts.
// IF GET SOME ANGULAR ERROR HERE: TRY THIS:
// npm install --save-dev @angular/cli@latest
// npm install -g @angular/cli@latest
// 4. WITHIN ..app/app.module.ts ADD THE FOLLWING:
// import { HttpService } from './http.service';
// import { HttpClientModule } from '@angular/common/http';
// 5. TO GENERATE COMPONENT: ng g c component_name
// http://learn.codingdojo.com/m/68/5376/34430