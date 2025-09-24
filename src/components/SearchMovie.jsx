import React from 'react'

const SearchMovie = () => {
    async function searchMovie(props){
        let movie = props.item;
          const res = await fetch('https://api.themoviedb.org/3/search/movie')
          const data =await res.json();
          console.log(data);
      }
  return (
    <div>
      <p>I am searchMovie</p>
    </div>
  )
}

export default SearchMovie
