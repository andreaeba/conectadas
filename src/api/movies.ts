// import { Movie } from "../types"

// const getAll = async (): Promise<Movie[]> => {

//     const response = await fetch(
//         'https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>'
//     )
    
//     const data = await response.json()


// }


const searchMovie = async (dataMovie: string) => {

    const response = await
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b5cc258c4cc4757fcf656286ef45ad9a&query=${dataMovie}`)

    const data = await response.json()

    console.log(data)
    return data
    

}

export const moviesApi = { searchMovie }
