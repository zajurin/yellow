const mongoose = require('mongoose')

const ModelCamper = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name '],
        unique: true,
        maxlength: [50, 'name cannot be more than 50 characters'],
        trim: true
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Description is needed'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    website:{
        type: String,
        match: [ 
            https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*), 'please provide a URL with http or https' 
        ]
    },
    phone:{
        type: String,
        maxLength: [20, 'phone must be 20 digits'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , 'please provide a valid Email']
    },
    email:{
        type: String,
        required: true,
        maxLength: [50, 'max of 50 characters'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid Email']
    },
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
          },
        formattedAddress: String,  
        street: String,  
        city: String,  
        state: String,  
        zipcode: String,  
        country: String

},
    career:{
        type:[String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating:{
        type: Number,
        min: [1, 'rating must be at least 1'],
        min: [10, 'rating can not be more than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing:{
        type: Boolean,
        default: false
    },
    jobAssistance:{
        type: Boolean,
        default: false
    },
    jobGuarantee:{
        type: Boolean,
        default: false
    },
    acceotGi:{
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('products', ModelCamper)