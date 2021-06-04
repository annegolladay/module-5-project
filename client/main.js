const form = document.querySelector('form')

const placesContainer = document.querySelector('.places-container')

const baseURL = 'http://localhost:400/api/places'

const placesCallback = ({ data: places}) => displayPlaces(places)
const errCallback = err => console.log(err)

const getAllPlaces = () => axios.get(baseURL).then(placesCallback).catch(errCallback)
const createPlace = body => axios.post(baseURL, body).then(placesCallback).catch(errCallback)
const deletePlace = id => axios.delete(`${baseURL}/${id}`).then(placesCallback).catch(errCallback)
const updatePlace = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(placesCallback).catch(errCallback)


function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        name: name.nodeValue,
        imageURL: imageURL.value
    }

    createPlace(bodyObj)

    name.value = ''
    imageURL.value = ''

}

function createPlaceCard(place) {
    const placeCard = document.createElement('div')
    placeCard.classList.add('place-card')

    placeCard.innerHTML = `<img alt='place cover image' src=${place.imageURL} class="place-cover-image"/>
    <p class="name">${place.name}</p>
    <button onclick="deletePlace(${place.id})">delete</button>
    `


    placesContainer.appendChild(placeCard)
}

function displayPlaces(arr) {
    placesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPlaceCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPlaces()