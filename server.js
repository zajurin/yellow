const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/camperDB')
require('dotenv').config()
const myRoutes = require('./routes/camperRoute')
const app = express()
const port = process.env.PORT || 5000

app.use('/api/v1/devcamper', myRoutes)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
            app.listen(port, ()=>{
                console.log(`server running in ${process.env.NODE_ENV} mode in port ${process.env.PORT}`)

        })
        console.log('DB Connected')

    }catch(error){
        console.log(error)
    }

}

start()