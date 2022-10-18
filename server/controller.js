const houses = require('./db.json')
let houseId = 4

module.exports = {
getHouses:(req,res) => {
    res.status(200).send(houses)
    
},

deleteHouse:(req,res) => {
    const deleteId = req.params.id
    let index = houses.findIndex(element => element.id === +deleteId)
    houses.splice(index, 1) 
    res.status(200).send(houses)
},

createHouse:(req,res) => {
    const {address, price, imageURL} = req.body
    let greatestId = -1
    for (let i = 0; i < houses.length; i++){
    if (houses[i].id > greatestId) {
        greatestId = houses[i].id
    }
}
    let nextId = greatestId +1
    let newHouse = {
        id: houseId,
        address,
        price: +price,
        imageURL

    }
    houses.push(newHouse)
    res.status(200).send(houses)
},

updateHouse:(req,res) => {
    let type = req.body.type
    let id =  req.params.id
    let index = houses.findIndex(element => element.id === +id)
    
    if(type === 'plus') {
        houses[index].price+= 10000
        res.status(200).send(houses)
    } else if  (type === 'minus') {
        houses[index].price-= 10000
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
},

}