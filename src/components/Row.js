import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoMdClose } from "react-icons/io";


const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL, }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isDivVisible, setDivVisible] = useState(false);//for yt close icon


    useEffect(() => {
        // console.log(process.env.REACT_APP_BASE_URL + fetchURL, "wertyuio");

        async function fetchData() {
            try {
                // console.log("fetchURL");
                const request = await axios.get(process.env.REACT_APP_BASE_URL + fetchURL).then((res) => {
                    setMovies(res.data.results);
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
        width: "95%",
        playerVars: {
            autoplay: 1,
        }
    }
    //Youtube Trailer js
    const handleClick = (movie) => {
        movieTrailer(movie?.title || movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search); //the URL object is used to parse the url (movie trailer URL) to extract the query parameters
                setTrailerUrl(urlParams.get('v'));
                setDivVisible(true);
            }).catch((error) => console.log("temporary unavailabe"));
        // }
    }
    //yt close btn logic
    const handleCloseClick = () => {
        setTrailerUrl('');
        setDivVisible(false);
    };


    //LEFT-RIGHT-ARROW SCROLLER
    const boxRef = useRef(null);

    const btnpressprev = () => {
        if (boxRef.current) {
            let width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
            // console.log(width);
        }
    }

    const btnpressnext = () => {
        if (boxRef.current) {
            let width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
            // console.log(width);
        }
    }

    return (
        <>
            <div className="row">
                <h2>{title}</h2>

                <div ref={boxRef} className="row_movies_posters">

                    <img src="./media/left-swipe.svg" className='left-arrow' onClick={btnpressprev} alt="left-arrow" />
                    <div className='left-arrow-shadow'></div>

                    {movies.map(movie => {

                        return <img key={movie.id} src={`${base_url}${movie.poster_path}`} alt={movie.title} className="posters" onClick={() => handleClick(movie)} />
                    })
                    }
                    <div className='right-arrow-shadow'></div>
                    <img src="./media/right-swipe.svg" className='right-arrow' onClick={btnpressnext} alt="right-arrow" />

                </div>

                <div className='yt-main'>
                    <div className='yt-player'>
                        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                    </div>
                    {isDivVisible && <IoMdClose className='close-yt-trailer-btn' onClick={() => handleCloseClick()} />}
                </div>

            </div>
        </>
    )
}

export default Row;


