const express = require("express");
const Product = require("../model/productList");
const Admin = require("../model/admin");
const router = express.Router();
//olika route /path /uri/ endpoint 


router.get("/admin", (req, res)=>{ 
    res.render("admin")
})

router.get("/admin/create", async (req, res)=>{

    //Query : create data
const adminData =new Admin({
    name:"FED19", 
    password:"123456",
    email:"fed@medie.se"   
})

  const resultat= await adminData.save()
  console.log(resultat)
res.send("Database connection succeeded")

})
router.post("/admin", (req, res)=>{

//skapar vi data
//ta hjälp av product modelen

//tredje: Query delen -create
//create:new Modelnamn({ett object med schema namn och data från user})
new Product( {
    name: req.body.name,
    price: req.body.price
})


})

module.exports = router;