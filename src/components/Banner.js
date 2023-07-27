import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Banner.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoMdClose } from "react-icons/io";
import { Skeleton } from '@mui/material';


function Banner({ bannerTitle, bannerFetchURL }) {
    const [bannerMovies, setBannerMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [isDivVisible, setDivVisible] = useState(false);//for yt close icon
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            async function fetchData() {
                try {
                    const response = await axios.get(process.env.REACT_APP_BASE_URL + bannerFetchURL);
                    const results = response.data.results;
                    const randomIndex = Math.floor(Math.random() * results.length);
                    const randomMovie = results[randomIndex];
                    setBannerMovies([randomMovie]);
                    setIsLoading(false);
                } catch (error) {
                    console.log(error, "Something went wrong with the API call");
                }
            }
            fetchData();
        }, 4000)
    }, []);

    // console.log(bannerMovies);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    //Youtube Trailer options
    const opts = {
        height: "390",
        width: "95%",
        playerVars: {
            autoplay: 1,
        }
    }
    // Banner Youtube Trailer js
    const handleClick = (movie) => {
        movieTrailer(movie?.title || movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search); //the URL object is used to parse the url (movie trailer URL) to extract the query parameters
                setTrailerUrl(urlParams.get('v'));
                setDivVisible(true);
            }).catch((error) => console.log("temporary unavailabe"));
    }
    //yt close btn logic
    const handleCloseClick = () => {
        setTrailerUrl('');
        setDivVisible(false);
    };


    return (
        <>
            {isLoading ?
                (
                    <div className='banner-skeleton'>
                        <Skeleton sx={{ bgcolor: 'grey.900', width: '1500px', height: '520px' }} variant='rectangle' animation="pulse" />
                    </div>

                ) :

                <header className="banner"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovies[0]?.backdrop_path}"  )`,
                        backgroundPosition: "center center"
                    }}
                >
                    <div className='mobile_fade'></div>
                    <div className="banner_contents">
                        <h1 className="banner_title">
                            {bannerMovies[0]?.title || bannerMovies[0]?.name || bannerMovies[0]?.original_name}
                        </h1>
                        <div className="banner_buttons">
                            <button className="banner_button" onClick={() => handleClick(bannerMovies[0])} >Play</button>
                            <button className="banner_button">My List</button>
                        </div>
                        <h1 className="banner_description">{truncate(bannerMovies[0]?.overview, 150)}</h1>
                    </div>
                    <div className="banner--fadeBottom" />
                </header>

            }
            <div className='yt-main'>
                <div>
                    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} className='yt-player' />}
                </div>
                {isDivVisible && <IoMdClose className='close-yt-trailer-btn' onClick={() => handleCloseClick()} />}
            </div>

        </>
    );
}

export default Banner;



