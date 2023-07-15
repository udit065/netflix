

export const tmdbDetails = [

    { id: 1, name: 'Netflix Originals', url: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213` },
    { id: 2, name: 'Trending Now', url: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}` },
    { id: 3, name: 'Top Rated', url: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}` },
    { id: 4, name: 'Upcoming Movies', url: `/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}` },
    { id: 6, name: 'Action Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28` },
    { id: 7, name: 'Animation Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16` },
    { id: 8, name: 'Horror Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27` },
    { id: 9, name: 'Romance Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749` },
    { id: 10, name: 'TV Shows', url: `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}` },
    // { i10: 3, name: ' popular Movie', url: `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`4},
    // { i10: 6, name: 'Top Rated TV', url: `/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}` }6
    // { i10: 8, name: 'Comedy Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}7with_genres=35` },
    // { i10: 8, name: 'Crime Movies', url: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&8ith_genres=80` },
    // { i10: 10, name: 'Science Fiction', url: `/discover/movie?api_key=${process.env.REACT_APP_API_K9Y}&with_genres=878  ` },10
]


// https://api.themoviedb.org/3/trending/all/week?api_key=d6d1aededa41237999396e7922d70c07
// https://api.themoviedb.org/3/tv/popular?api_key=d6d1aededa41237999396e7922d70c07

// https://api.themoviedb.org/3/discover/movie?api_key=d6d1aededa41237999396e7922d70c07&with_genres=28
// https://api.themoviedb.org/3/discover/movie?api_key=d6d1aededa41237999396e7922d70c07&with_networks=213&&with_networks=1024

// fetchNetflixOriginals = ``;
// fetchTopRated = ``;
// fetchActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=d6d1aededa41237999396e7922d70c07&with_genre=28`;
// fetchComedyMovies = ``;
// fetchHorrorMovies = ``;
// fetchRomanceMovies = ``;
// fetchThrillerMovies = ``;
// fetchAnimationMovies = ``;
// fetchCrimeMovies = ``;