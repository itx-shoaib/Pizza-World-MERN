// Making server by first importing express in express variable.
const express = require("express");

// Importing Pizza Model in Pizza variable
const Pizza = require('./models/pizzaModel')
const pizzasRoute = require('./routes/pizzaRoute')

const db = require('./db.js')

const app = express();
app.use(express.json());

app.use('/api/pizzas',pizzasRoute)


// // Making API for getting all pizza
// app.get("/getallpizzas",(req,res)=>{

//     // Finding all data from Pizza
//     Pizza.find({},(err,docs)=>{
//         if (err) {
//             console.log(error)
//         } else {
//             res.send(docs)
//         }
//     })

// })

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started by using nodemon"))