import React from "react";
import "../style/header.scss";
import { useState } from "react";
import { NavLink,useLocation } from "react-router";
import Login from "./Login.jsx";

const Navbar = (props) => {
  const [searchQuery, setsearchQuery] = useState("");
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  //console.log(location.pathname);

  function handleChange(event) {
    //console.log(event.target.value);
    setsearchQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("hello");
    if (searchQuery.trim() === '') return; //(searchQuery.trim()return) it will return in every case we want to return when no movie name is written
    props.searchMovie(searchQuery);
  }
  const showSearchBar = user && location.pathname !== "/about" ;
  


  return (
    <div className="navbar">
      <img src="/images/logo.png" alt="logo" className="logo"></img>
      <nav>
        <div className="ul_div">
          <NavLink to="/">
            <div className="li_div">Home</div>
          </NavLink>
          <NavLink to="/movies">
            <div className="li_div">Movie</div>
          </NavLink>
          <NavLink to="/tv">
            <div className="li_div">TV</div>
          </NavLink>
          <NavLink to="/about">
            <div className="li_div">About</div>
          </NavLink>
        </div>
      </nav>
      {showSearchBar && (
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={handleChange}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
  )}
      <div>
      <Login/>
   
      </div>
     
    </div>
  );
};

export default Navbar;
