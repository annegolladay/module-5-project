const places = require('./db.json')
let globalId = 4

module.exports = {
    getPlaces: (req, res) => {
        res.status(200).send(places)
    },
    createPlace: (req, res) => {
        const {name, imageURL} = req.body

        const newPlace = {
            id: globalId,
            name: name,
            imageURL: imageURL
        }

        places.push(newPlace)
        res.status(200).send(places)
        globalId++
    },
    updatePlace: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        const index = places.findIndex((place) => {
            return place.id === +id
        })

        res.status(200).send(places)
        
    },
    deletePlace: (req, res) => {
        //console.log(req.params)
        const {id} = req.params
        //console.log(id)
        //console.log(typeof id)
        const index = places.findIndex((place) => {
            return place.id === +id
        })
        //console.log(index)
        places.splice(index, 1)
        res.status(200).send(places)
    }
}