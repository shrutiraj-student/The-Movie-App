import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/card.scss";
import { useQuery } from "@tanstack/react-query";
import ButtonExample from "./ButtonExample";
import FilterResult from "./FilterResult";
import { Navigate, useNavigate } from "react-router";

const Movies = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const user = JSON.parse(localStorage.getItem("userInfo"));

  if (!user) {
    alert("Login First");
    return <Navigate to="/" replace />;
  }
  const [isLoadingstate, setIsLoadingstate] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  //const [bookMarkItem,setBookMarkItem] = useState(JSON.parse(localStorage.getItem("bookMarkKey")) || []); -> make it in key value pair
  const [bookMarkItem, setBookMarkItem] = useState(() => {
    const rawData = localStorage.getItem("bookMarkKey"); //_> for the first time there will be no data then return empty array as we are using array
    if (!rawData) return [];
    return JSON.parse(rawData);
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["movie"], //queryKey must always be an array,
    queryFn: () => getMovies(),
  });

  useEffect(() => {
    setMovies(data?.results || []);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("bookMarkKey", JSON.stringify(bookMarkItem));
  }, [bookMarkItem]);
  function bookMarkFunction(movieId) {
    const matchMovie = data?.results.find((i) => i.id == movieId);
    console.log("BookMarked: ", matchMovie);
    //we are expanding bookMarkItem array for temp we are using oldMarked
    setBookMarkItem((oldBookMark) => {
      if (oldBookMark.includes(movieId)) {
        return oldBookMark.filter((element) => element != movieId);
      } else {
        return [...oldBookMark, movieId];
      }
    });
  }

  async function getMovies(sort_by) {
    

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=${sort_by}&include_adult=${false}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(Array.isArray(data.results) ? data.results : []);//whthere anything any respond from search query is there or not
      //setMovies(data.results);
      return data;
    } catch (error) {
      console.log("Some error in fetching");
    }
  }
  async function searchMovie(searchQuery) {
    setIsLoadingstate(true);
    setQuery(searchQuery);
    console.log("Search API Start");
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchQuery}&include_adult=${false}`
    );
    const data = await res.json();
    console.log("Search results:", data.results);
    setMovies(Array.isArray(data.results) ? data.results : []);
    setIsLoadingstate(false);
    console.log("Search results:", data.results);
  }

  if (isError) return <p>error..</p>;

  console.log("Render - Movie", movies);
  return (
    <div>
      <Navbar searchMovie={searchMovie} user={user} />

      <FilterResult onFilter={getMovies} />
      <div className="movie-wrapper">
        {isLoading || isLoadingstate ? (
          <ButtonExample />
        ) :  (!movies || movies.length === 0) && query ? ( // reaction when setMovie array is empty
          <p className="no-results">
            No movies found for "{query}". Try another title.
          </p>
        ) : (
          movies.map((movie) => {
            if (!movie || !movie.title || !movie.poster_path || !movie.vote_average) {
              <p className="no-results">
              No movies found . Try another option.
            </p>
            };

            const isBookMark = bookMarkItem.includes(movie.id);
            return (
              <div key={movie.id} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="movie-content">
                  <div className="title_div">
                    <h2>
                      {movie.title.length > 35
                        ? movie.title.substring(0, 32) + "..."
                        : movie.title}
                    </h2>
                  </div>
                  <i className="fa-solid fa-star"></i>
                  {movie.vote_average.toFixed(1)}
                  <i
                    className="fa-solid fa-heart"
                    onClick={() => bookMarkFunction(movie.id)}
                    style={{ color: isBookMark ? "red" : "" }}
                  ></i>
                  <p className="overview_p">
                    {movie.overview.substring(0, 70) + "..."}
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

export default Movies;
