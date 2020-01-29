
//npm i mongoose 
var mongoose = require('mongoose');


var options = {
useNewUrlParser: true,
useUnifiedTopology: true 
}
//connection
mongoose
.connect('mongodb://localhost/Fed', options)
.then(()=>{
   console.log("connected to mydatabase database")
}).catch((e)=>{
    console.log(e)
})
 
 //schema och model
 const productSchema = new mongoose.Schema({
   name:String,
   price: Number,
   tags:[String],
   date: {
       type: Date, default:Date.now
   },
   isAvailable: Boolean
})
 
 //skapa model med en schema
const Product =mongoose.model("product", productSchema);


//Query:

//skapa 
new Product({

})







async function createProduct(){
const skor = new Product({
   name:"Nike",
   price: 1200,
   tags:[ "nike model 19"],
   isAvailable: true
})
const res = await skor.save()
console.log(res);
}
 
createProduct();


async function getProduct(){
   const res = await Product.find({
       name:"Nike"
   })
   .limit(1)
   //name: 1 visar asyndecending, -1 decending 
   .select({name:1, tags:-1, price:-1})
   console.log(res)
}
getProduct() 
