import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // console.log(process.env.REACT_APP_BASE_URL + fetchURL, "wertyuio");

        async function fetchData() {
            try {
                const request = await axios.get(process.env.REACT_APP_BASE_URL + fetchURL).then((res) => {
                    setMovies(res.data.results);
                    // console.log(moviesData,"axios")
                    // retur
                })
            }
            catch (error) {
                console.log(error, "Something Went wrong with API Call");
            }
        }
        fetchData();
    }, [fetchURL]);

    // console.log(movies);

    //Youtube Trailer options
    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
            autoplay: 0,
        }
    }
    //Youtube Trailer js
    const handleClick = (movie) => {
        // console.log(movie?.title)
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error) => console.log(error));
        }
    }

    return (
        <>
            <div className="row">
                <h2>{title}</h2>

                <div className="row_movies_posters">

                    {movies.map(movie => {

                        return <img key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.title} className="posters" onClick={() => handleClick(movie)} />
                    })
                    }
                </div>
                <div style={{ padding: "0.5rem" }}>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                </div>
            </div>
        </>
    )
}

export default Row;


