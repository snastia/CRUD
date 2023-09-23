const { bodyParser } = require("json-server");

const BASE_URL = 'http://localhost:3000';

//  метод get

// function getMovies(){
//     return fetch(`${BASE_URL}/movies`)
//     .then(response => response.json())
// }

// function getMoviesById(movieId){
//     return fetch(`${BASE_URL}/movies/${movieId}`)
//     .then(response => response.json())
// }

// const newMovie = {
//         title: "JS",
//         director: "Me",
//         genres: [
//             "Drama"
//         ],
//         ration: 10
// }

// function createMovie(){
//     const options = {
//     method: POST,
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newMovie)
// }
//     return fetch(`${BASE_URL}/movies`, options)
// }


// patch

// function updateMovieById(bookId, update) {
//     const options = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(update)
//     }
//    return fetch(`${BASE_URL}/movies/${bookId}`, options)
//    .then(res => res.json())
// }

// updateMovieById(1, {
//     title: "New JS",
//     director: "Somebody",
// }).then(res => console.log(res))

// function deleteMovie(id){
//    const options = {
//         method: "DELETE"
//    }
//    return fetch(`${BASE_URL}/movies/${id}`, options)
//    .then(res => res.json())
// }

// deleteMovie(3).then(res => console.log(res))

// асинхронні функції, catch, try

// setTimeout(() => {
//     try {
//     console.log("a")
//     id;
//     console.log("b")
//     } catch(error) {
//     console.log("помилка")

//     }
// }, 500)


const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд повернув якусь нісенітницю }';

function checkValid(obj){
    try {
      return JSON.parse(obj)
    } catch(error) {
       console.log("бекенд повернув якусь нісенітницю")
    }
}

checkValid(validJSON)
checkValid(invalidJSON)


function getFruit(name) {
    const fruits = {
      strawberry: '🍓',
      kiwi: '🥝 ',
      apple: '🍎',
    };
  
    return Promise.resolve(fruits[name]);
  }

    async function aMakeSmoothie(){
       const kiwi = await getFruit("kiwi")
       console.log(kiwi)

       const apple = await getFruit("apple")
       console.log(apple)
    }

    aMakeSmoothie()

//   function makeSmoothie() {
//     getFruit("kiwi").then((res) => {
//         console.log(res)
//         getFruit("apple").then(console.log)
//     })
//   }

//   makeSmoothi()