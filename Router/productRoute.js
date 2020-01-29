//behöver express modulen 
//sen behöver vi bara Router metoden från express . express.Router()
//skriva routes 
//exportera router
const express = require("express");
const products = require("../model/productList")
//mini app som hämtar bara route delen från express
const router = express.Router()
router.get("/product" , (req, res)=>{
    res.render("product",  { products:products});
})

router.get("/product/:id", (req, res)=>{
    if(Number(req.params.id) || req.params.id >products.length ) {
    res.render("404")}
    res.render("productEdit", {product:products[req.body.id]})
})
router.post("/product/productEdit", (req, res)=>{
   console.log(req.body.product_name)
   console.log("request id " , req.body)
   console.log(req.body.id)
   products[Number(req.body.id)].product_name
    = req.body.product_name;
    products[Number(req.body.id)].id= req.body.id;
    products[Number(req.body.id)].price = req.body.price;
    res.render("product", {products})
})

router.get("/productDelete/:id", (req, res)=>{
    console.log("delete params" , req.params.id)
   
  products.splice( req.params.id, 1)
   
   res.redirect("/product")
    
}) 

module.exports = router;

