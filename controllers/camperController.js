const getAll =()=>{
    res.status(200).json({msg: 'you got All Items'})
}

const getSingle = ()=>{
    res.status(200).json({msg: 'One Item'})
}

const postItem = ()=>{
    res.status(200).json({msg: 'You created an Item'})
}

const updateItem = ()=>{
    res.status(200).json({msg: 'Item UPDATED'})
}

const deleteItem = ()=>{
    res.status(200).json({msg: 'Deleted item'})
}

module.exports = {getAll, getSingle, postItem, updateItem, deleteItem}