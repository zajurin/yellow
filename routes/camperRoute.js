const express = require('express')

const router = express.Router()

const {getAll, getSingle, postItem, updateItem, deleteItem} = require('../controllers/camperController')


router
    .route('/')
        .get(getAll)
        .post(postItem)
    
    
    router
    .route('/:id')
        .get(getSingle)
        .put(updateItem)
        .delete(deleteItem)

        module.exports = router