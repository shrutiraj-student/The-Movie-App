import React, { useState } from "react";
import '../style/filterResult.scss';
//http GET 'https://api.themoviedb.org/3/discover/movie?&sort_by=${sort_by}' \

const FilterResult = (props) => {
  const [sortType, setSortType] = useState("popularity.desc");

  // async function sortedMovie(event) {
  //   //const res = `https://api.themoviedb.org/3/discover/movie?&sort_by=${sort_by}`
  //   //const data = res.json();
  //   props.getMovies(event.target.value);

  // }

  function handleOnChange(event) { //if we have same chiild for more than 1 parent than we can 
    setSortType(event.target.value); //keep the name of attribute same in both parent component child will refer it by one single name  
    props.onFilter(event.target.value);
  }

  return (
    <div>
      <div className="sorting_div">
      <label className="sorting_span">Sort Movies By:</label>
        <select
          name="sort_by"
          className="sort_by"
          value={sortType}
          onChange={handleOnChange}
        >
          <option  value="popularity.asc">Less Popular</option>
          <option value="popularity.desc">More Popular</option>
          <option value="title.asc">Ascending Title</option>
          <option value="title.desc">Decending Title</option>
          <option value="primary_release_date.asc">Far Released</option>
          <option value="primary_release_date.desc">Recent Release</option>
          <option value="vote_average.asc">Less Average Vote</option>
          <option value="vote_average.desc">More Average Vote</option>
          <option></option>
        </select>
      </div>
      <div className="generic_type"></div>
    </div>
  );
};

export default FilterResult;
