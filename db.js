// mongodb+srv://shoaib:<password>@cluster0.gxfrpaw.mongodb.net/test

const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://shoaib:shoaibjamil43@cluster0.gxfrpaw.mongodb.net/merns-pizzaworld'

mongoose.connect(mongoURL,{useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongodb connection failed')
})

connection.on('connected',()=>{
    console.log('successfully connected to mongodb')
})

module.exports = mongoose