import axios from 'axios';
import postTpl from "./postTpl.handlebars"
import { basename } from 'path-browserify';

// const { bodyParser } = require("json-server");

// const { domainToUnicode } = require("url")

// const BASE_URL = 'http://localhost:3000';

// //  метод get

// async function getMovies(){
//   try{
//      const getMovies = await fetch(`${BASE_URL}/movies`)
//      const parcedData = await fetch.json()
//      return parcedData
//   } catch(error){
//     console.log(error);
//   }
// }

// async function getMoviesById(movieId){
//   try{
//     const fetchById = await fetch(`${BASE_URL}/movies/${movieId}`)
//     const parcedById = await fetch.json()
//     return parcedById
//  } catch(error){
//    console.log(error);
//  }
// }

// const newMovie = {
//       title: "JS",
//       director: "Me",
//       genres: [
//           "Drama"
//       ],
//       ration: 10
// }

// async function createMovie(){
//     const options = {
//     method: POST,
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newMovie)
// }
//    try{
//       const result = await fetch(`${BASE_URL}/movies`, options)
//       const parsed = await result.json()
//       return parsed
//    } catch(error){
//     console.log(error);
//    }
    
// }


// // patch

// async function updateMovieById(bookId, update) {
//     const options = {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(update)
//     }
//     try{
//        const movie = await fetch(`${BASE_URL}/movies/${bookId}`, options)
//        const parcedMovie = await movie.json()
//        return parcedMovie
//     } catch (error){
//        console.log(error)
//     }
   
// }

// updateMovieById(1, {
//     title: "New JS",
//     director: "Somebody",
// }).then(res => console.log(res))

// async function deleteMovie(id){
//    const options = {
//         method: "DELETE"
//    }
//    try{
//        const movie = await fetch(`${BASE_URL}/movies/${id}`, options)
//        const deleteMovie = await res.json()
//        return deleteMovie
//    } catch(error){
//     console.log(error);
//    }
  
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


// const validJSON = '{ "name": "Манго", "age": 3 }';
// const invalidJSON = '{ бекенд повернув якусь нісенітницю }';

// function checkValid(obj){
//     try {
//       return JSON.parse(obj)
//     } catch(error) {
//        console.log("бекенд повернув якусь нісенітницю")
//     }
// }

// checkValid(validJSON)
// checkValid(invalidJSON)


// function getFruit(name) {
//     const fruits = {
//       strawberry: '🍓',
//       kiwi: '🥝 ',
//       apple: '🍎',
//     }
  
//     return new Promise((resolve) =>{
//       setTimeout(() => {
//          resolve(fruits[name]);
//       }, 500)
//   })
// }
// async function aMakeSmoothie(){
//     const kiwi = await getFruit("kiwi")
//     console.log(kiwi)

//     const apple = await getFruit("apple")
//     console.log(apple)
    
//     const strawberry = await getFruit("strawberry")
//     console.log(strawberry)

//     const smothie = await Promise.all([kiwi, apple, strawberry])
//     console.log(smothie)
//     }   

//     aMakeSmoothie()

//   function makeSmoothie() {
//     getFruit("kiwi").then((res) => {
//         console.log(res)
//         getFruit("apple").then(console.log)
  //   })
  // }

  // makeSmoothi()

const BASE_URL = 'http://localhost:3000/posts'

const postBoxEl = document.getElementById("postsContainer")
const formEl = document.getElementById('createPostForm')

async function getPosts() {
    try {
      const posts = await fetch(BASE_URL)
      return await posts.json()
    } catch (error) {
    console.log(error)
    }
    }
    // console.log(getPosts())

    // Створення нового поста
    
    async function createPost(title, text) {
    try {
        await axios.post(BASE_URL, {
        title,
        text
       })
    } catch (error) {
    console.error(error);
    }
    }
    
    // Оновлення поста
    
    async function updatePost(id, title, text) {
    try {
    
    } catch (error) {
    console.error(error);
    }
    }
    
    // Видалення поста
    
    async function deletePost(id) {
    try {
       await axios.delete(`${BASE_URL}/${id}`)
    } catch (error) {
    console.error(error);
    }
    }
    
    // Додавання коментаря до поста
    
    async function createComment(postId, comment) {
    try {
      const comments = await axios.post(`${BASE_URL}/${postId}`, {
        comment
      })
    } catch (error) {
    console.log(error);
    }
    }
    
    // Оновлення відображення постів на сторінці
    
    function renderPosts(posts) {
      postBoxEl.innerHTML = postTpl(posts)
    }
    
    // Обробник події для створення поста
    
    formEl.addEventListener('submit', async (event) => {
      event.preventDefault()
      const title = event.currentTarget.elements.title.value
      const text = event.currentTarget.elements.text.value
      createPost(title, text)
      event.currentTarget.remove()
      const posts = await getPosts()
      renderPosts(posts)
    });
    
    // Обробник події для редагування поста
    
    // document.addEventListener('click', cb);
    
    // Обробник події для видалення поста
    
    postBoxEl.addEventListener('click', async (e) => {
         if (e.target.classList.contains("deletePostButton")) {
          const id = e.target.getAttribute("data-id")
          console.log(id)
          await deletePost(id)
          await startApp()
         }
    });
    
    // Обробник події для додавання коментаря
    
    postBoxEl.addEventListener('submit', async (event) => {
      event.preventDefault()
      if (event.target.classList.contains("createCommentForm")) {
        const id = event.target.getAttribute("data-id")
        const value = event.target.elements.comment.value
        await createComment(id, value)
        await startApp()
      }
    });
    
    // Запуск додатку
    
    async function startApp() {
    const posts = await getPosts();
    
    renderPosts(posts);
     
    }
    
    startApp()