const express = require('express')
const router =  express.Router();
const Pizza = require('../models/pizzaModel')

// Router 1: Getting the all Pizzas by GET Method Path: 
// Status : Testing
router.get('/getallpizzas',async(req,res)=>{
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({ message:error})        
    }
})

module.exports = router;