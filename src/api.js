
// import { config } from "./config.js"

// const BASE_URL = config.api_base_url
// const API_KEY = config.api_key

// export async function getPopularMovies(page = 1) {
//     let data = []
//     try {
//         const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
//         const responseData = await response.json()
//         data = responseData?.results
//         // console.log(response)
//         // console.log(responseData)
//         console.log(data)
//     } catch (error) {
        
//     }
//     return data
// }
// // https://api.themoviedb.org/3/movie/popular?api_key=d6d1aededa41237999396e7922d70c07