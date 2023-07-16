import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Banner.css"

function Banner({ bannerTitle, bannerFetchURL }) {
    const [bannerMovies, setBannerMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(process.env.REACT_APP_BASE_URL + bannerFetchURL);
                const results = response.data.results;
                const randomIndex = Math.floor(Math.random() * results.length);
                const randomMovie = results[randomIndex];
                setBannerMovies([randomMovie]);
            } catch (error) {
                console.log(error, "Something went wrong with the API call");
            }
        }
        fetchData();
    }, []);

    // console.log(bannerMovies);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
            {bannerMovies.length > 0 && (
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
                            <button className="banner_button">Play</button>
                            <button className="banner_button">My List</button>
                        </div>
                        <h1 className="banner_description">{truncate(bannerMovies[0]?.overview, 150)}</h1>
                    </div>

                    <div className="banner--fadeBottom" />
                </header>
            )}
        </>
    );
}

export default Banner;



