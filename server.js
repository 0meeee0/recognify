require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = process.env.PORT

app.get('/', (req,res)=>{
    res.send("wa3ak")
})

mongoose.connect(process.env.CONNECTION_LINK).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(port,()=>{
        console.log(`app running on port: ${port}`)
    })
})
