const { application } = require("express");

const BASE_URL = 'http://localhost:3000';

// метод get

function getMovies(){
    return fetch(`${BASE_URL}/movies`)
    .then(response => response.json())
}

function getMoviesById(movieId){
    return fetch(`${BASE_URL}/movies/${movieId}`)
    .then(response => response.json())
}

const newMovie = {
        title: "JS",
        director: "Me",
        genres: [
            "Drama"
        ],
        ration: 10
}

const options = {
    method: POST,
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newMovie)
}

function createMovie(){
    return fetch(`${BASE_URL}/movies`, options)
}