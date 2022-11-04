const express = require('express')
const dotenv = require('dotenv')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000


app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode in port ${process.env.PORT}`))