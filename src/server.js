const express = require('express')
const app = express()

const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://snlee:CuP3CXn7QKIDOae6@tutorial.5q9lutx.mongodb.net/?tls=true'

const server = async() => {
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true})
        console.log('MongoDB connected')
        app.use(express.json())

        app.get('/user', function(req, res) {
            return res.send({users:users})
        })

        app.post('/user', function(req, res) {
            users.push({name : req.body.name, age : req.body.age})
            return res.send({success : true})
        })

        app.listen(3000, function(){
            console.log('server listening port 3000 !')
        })
        
    } catch (error) {
        console.log(error)
    }
}
server()

