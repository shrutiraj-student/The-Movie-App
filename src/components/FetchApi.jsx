import React, { useEffect, useState } from 'react'

const FetchApi = (props) => {
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState();
  //for discover based on filter condition
  // const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDRjMjkyNjdlMzMyNjBjZjZkODhiMTQ4ZDQ1NzUwMiIsIm5iZiI6MTc1NzQxNzcyMC42NjUsInN1YiI6IjY4YzAxMGY4NzdlMTc0NTBjMzk4YzVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEn7QVGQOm15aZqn-tdakFoBToTpDZg_nO2phxDJTRU'
  //     }
  //   };

  //   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // console.log(options)

  //for displaying movie as per searched one
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDRjMjkyNjdlMzMyNjBjZjZkODhiMTQ4ZDQ1NzUwMiIsIm5iZiI6MTc1NzQxNzcyMC42NjUsInN1YiI6IjY4YzAxMGY4NzdlMTc0NTBjMzk4YzVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qEn7QVGQOm15aZqn-tdakFoBToTpDZg_nO2phxDJTRU'
    }
  };

  //   fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1', options)
  //     .then(res => res.json())
  //     //.then(res => console.log(res))
  //     //.then(res => console.log(res.results[0].name))
  //     //.catch(err => console.error(err));
  //     .then(res=>{
  //         return res.json;
  //     })

  //     .then(res =>{console.log(res.json)});
  //     //console.log(options);

  // const fetchData = () => {
  //     fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1', options)
  //       .then(response => {
  //         return response.json()
  //       })
  //       .then(data => {
  //         setMovies(data.results)
  //         return data.results;
  //       })
  //       .then(ans=>{
  //         console.log("i am ", ans[0].name);
  //       })
  //   }
  useEffect(() => {
    fetchData(), fetchImage();
  }, [])

  // async function fetchImage(){
  //    const res = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1', options)
  //    const data = await res.json();
  //    const imageObjURL = data.results.map((i=>{
  //     fetch('https://image.tmdb.org/t/p/w500${i.poster_path}')
  // }));
  // console.log(imageObjURL)


async function searchMovie(props) {
  let movie = props.item;
  const res = await fetch('https://api.themoviedb.org/3/search/movie')
  const data = await res.json();
  console.log(data);
}
return (
    <></>
  )

}


export default FetchApi
