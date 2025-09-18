import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style/home.scss";
import "./style/card.scss";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonExample from "./ButtonExample";

const Home = (props) => {
  
  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [showMovie, setShowMovie] = useState(false);
  const [bookMarkItem, setBookMarkItem] = useState(() => {
    const rawData = localStorage.getItem("bookMarkKey"); //_> for the first time there will be no data then return empty array as we are using array
    if (!rawData) return [];
    return JSON.parse(rawData);
  });
  const user = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    localStorage.setItem("bookMarkKey", JSON.stringify(bookMarkItem));
  }, [bookMarkItem]);

  function bookMarkFunction(movieId) {
    const matchMovie = data?.results.find((i) => i.id == movieId);
    //console.log("BookMarked: ", matchMovie)
    //we are expanding bookMarkItem array for temp we are using oldMarked
    setBookMarkItem((oldBookMark) => {
      if (oldBookMark.includes(movieId)) {
        return oldBookMark.filter((element) => element != movieId);
      } else {
        return [...oldBookMark, movieId];
      }
    });
  }
  //reactQuery
  //const api_key = 'cd4c29267e33260cf6d88b148d457502';
  const api_key = import.meta.env.VITE_API_KEY;
  // const { isLoading, data , error} = useQuery({
  //   queryKey: ["searchMovie"],
  //   queryFn: () => {
  //     console.log("calling api before")
  //     //console.log('S - SearchQUERY',searchQuery)
  //      searchMovie('shruti');
  //     console.log("calling api after")
  //   },
    
  // });
  async function searchMovie(searchQuery) {
    setIsLoading(true)
    console.log('Search API Start')
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&include_adult=${false}`
    );
    const data = await res.json();
    console.log(data.results);
    setMovies(data.results);
    setShowMovie(true);
    setIsLoading(false);
  }

  return (
    <div>
      <Navbar searchMovie={searchMovie} user={user}/>
      {showMovie ? (
        <div className="movie-wrapper">
          {isLoading ? (
            <ButtonExample />
          ) : (
            movies.map((movie) => {
              const isBookMark = bookMarkItem.includes(movie.id);
              return (
                <div key={movie.id} className="movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-content">
                    <div className="title_div">
                      <h2>{movie.title}</h2>
                    </div>

                    <i className="fa-solid fa-star"></i>
                    {movie.vote_average.toFixed(1)}
                    <i
                      className="fa-solid fa-heart"
                      onClick={() => bookMarkFunction(movie.id)}
                      style={{ color: isBookMark ? "red" : "" }}
                    ></i>
                    <p className="overview_p">
                      {movie.overview.substring(0, 80) + "..."}
                    </p>
                    <button className="read_more_btn">Read More</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div className="home_container">
          <div className="plans_div">
            <h1>Welcome to App</h1>
            <h3>
              Watch the latest movies, TV shows, and award-winning Movie
              Originals
            </h3>
            <div className="plans">
              <h4>Join Annual Plan at Rs.125/month*</h4>
            </div>
            <div className="plans">
              <h4>Join Lite Plan at Rs.125/month*</h4>
            </div>
            <div className="plans">
              <h4>View All Plan</h4>
            </div>
          </div>

          <div className="poster_div">
            <div className="poster_container">
              <img src="/images/poster2.jpeg" alt="poster" />
            </div>
            <div className="poster_container">
              <img src="/images/poster3.jpeg" alt="poster" />
            </div>
            <div className="poster_container">
              <img src="/images/poster4.jpeg" alt="poster" />
            </div>
            <div className="poster_container">
              <img src="/images/poster1.jpeg" alt="poster" />
            </div>
            <div className="poster_container">
              <img src="/images/poster5.jpeg" alt="poster" />
            </div>
            <div className="poster_container">
              <img src="/images/poster6.jpeg" alt="poster" />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
