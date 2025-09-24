import React, { createContext,useState,useEffect } from 'react'
import Tv from './Tv';


const BookMarkProvider = createContext();
const BookMarkContent = () => {
    //const [bookMarkItem,setBookMarkItem] = useState(JSON.parse(localStorage.getItem("bookMarkKey")) || []); -> make it in key value pair
    const [bookMarkItem,setBookMarkItem] = useState(()=>{
      const rawData = localStorage.getItem('bookMarkKey');  //_> for the first time there will be no data then return empty array as we are using array 
      if(!rawData)return [];
      return JSON.parse(rawData);
    })

    useEffect(()=>{
      localStorage.setItem("bookMarkKey",JSON.stringify(bookMarkItem))
    },[bookMarkItem]);
  
    

  return (
    <div>
      <BookMarkProvider.Provider value={{setBookMarkItem,bookMarkItem}}> 
          <Home/>
          <Movies/>
          <Tv/>
      </BookMarkProvider.Provider>
    </div>
  )
}

export {BookMarkProvider}
export default BookMarkContent
