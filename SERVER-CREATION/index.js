const express = require('express')
const colors = require('colors')
const app = express();

app.get('/' , (req,res)=>{
    res.send("Well come")
})

app.listen(8080 , ()=>{
    console.log('Server Started...'.white.bgBlue);
})