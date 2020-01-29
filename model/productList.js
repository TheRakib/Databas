//data ska komma från databas
const mongoose = require("mongoose");
//appens namn: första Product 
//Databas document namn : den som ligger i model methoden

const productSchema = new mongoose.Schema({
    name: String,
    price:Number
    
})
const Product = mongoose.model("Product",  productSchema  )




module.exports = Product;