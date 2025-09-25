import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import './style/tv.scss'
import "../style/card.scss";
import { useQuery } from "@tanstack/react-query";
import ButtonExample from "./ButtonExample";
import FilterResultTv from "./FilterResultTv";
import { Navigate } from "react-router";
//require('dotenv').config()

const api_key = import.meta.env.VITE_API_KEY;

const Tv = () => {
  const [isLoadingstate, setIsLoadingstate] = useState(false);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    alert("Login First");
    return <Navigate to="/" replace />;
  }

  const [tvShows, setTvShow] = useState([]); //in use when fetch is used in useQuery it cause confusion because of stale data
  const [query, setQuery] = useState("");
  //const [bookMarkItem,setBookMarkItem] = useState(JSON.parse(localStorage.getItem("bookMarkKey")) || []); -> make it in key value pair
  const [bookMarkItem, setBookMarkItem] = useState(() => {
    const rawData = localStorage.getItem("bookMarkKey"); //_> for the first time there will be no data then return empty array as we are using array
    if (!rawData) return [];
    return JSON.parse(rawData);
  });

  useEffect(() => {
    localStorage.setItem("bookMarkKey", JSON.stringify(bookMarkItem));
  }, [bookMarkItem]);

  function bookMarkFunction(movieId) {
    // const matchMovie = data?.results.find((i) => i.id == movieId);
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

  async function getTvShow(sort_by) {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&sort_by=${sort_by}&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data tv i am sorting ", data);
      setTvShow(Array.isArray(data.results) ? data.results : []);
      return data;
    } catch (error) {
      console.log("Some error in fetching");
    }
  }

  const { data, isError, isLoading } = useQuery({
    queryKey: ["tv"],
    queryFn: getTvShow,
  });
  if (isError) {
    alert("error occured in fetching tv api");
  }
  useEffect(() => {
    setTvShow(data?.results || []);
  }, [data]);

  async function searchMovie(searchQuery) {
    setIsLoadingstate(true);
    setQuery(searchQuery);
    console.log("Search API Start");
    const res = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchQuery}&include_adult=${false}`
    );
    const data = await res.json();
    console.log(data.results);
    setTvShow(Array.isArray(data.results) ? data.results : []);
    setIsLoadingstate(false);
  }
  //console.log("State TVShows", tvShows);
  return (
    <div>
      <Navbar searchMovie={searchMovie} user={user}/>
      <FilterResultTv onFilter={getTvShow} />
      <div className="movie-wrapper">
        {isLoading ? (
          <ButtonExample />
        ) :(!tvShows || tvShows.length === 0) && query ? (
          <p className="no-results">
            No show found for "{query}". Try another title.
          </p>
        ) : (
          tvShows.map((tvShow) => {
            if (!tvShow || !tvShow.name || !tvShow.poster_path || !tvShow.vote_average) return null;
            const isBookMark = bookMarkItem.includes(tvShow.id);
            return (
              <div key={tvShow.id} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                  alt={tvShow.name}
                />
                <div className="movie-content">
                  <div className="title_div">
                    <h2>
                      {tvShow.name.length > 30
                        ? tvShow.name.substring(0, 30) + "..."
                        : tvShow.name}
                    </h2>
                  </div>
                  <i className="fa-solid fa-star"></i>
                  {tvShow.vote_average.toFixed(1)}
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => bookMarkFunction(tvShow.id)}
                    style={{ color: isBookMark ? "red" : "" }}
                  ></i>
                  <p className="overview_p">
                    {tvShow.overview.substring(0, 80) + "..."}
                  </p>
                  <button className="read_more_btn">Read More</button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Tv;
