const mongoose = require('mongoose')

const connectDB = async (url)=>{
    const conn = await mongoose.connect(url)
    console.log(`connected DB`)
}

module.exports = connectDB