const express = require("express");
const productRoute = require("./Router/productRoute");
const adminRoute = require("./Router/adminRoute");
const notFound = require("./Router/404")
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app= express();
app.use(bodyparser.urlencoded({extended:false}));

app.set("views", "views" );
app.set("view engine", "ejs");
app.use(productRoute)
app.use(adminRoute);
//not found ska läggas i längst ner i router use middleware
app.use(notFound)

//första steg . Connection 
mongoose.connect("mongodb+srv://Rakib:Fed2019s@cluster0-aahps.mongodb.net/test?retryWrites=true&w=majority")
        .then(()=>app.listen(8012));
