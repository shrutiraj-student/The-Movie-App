import React, { useState } from "react";
import './style/filterResult.scss';


const FilterResult = (props) => {
  const [sortType, setSortType] = useState("popularity.desc");
  function handleOnChange(event) {
    setSortType(event.target.value);
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
          <option value="name.asc">Ascending Title</option>
          <option value="name.desc">Decending Title</option>
          <option value="first_air_date.asc">Far Released</option>
          <option value="popularity.desc">Recent Release</option>
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
