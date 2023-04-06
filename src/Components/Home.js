import{ useState, useEffect } from 'react';
import MovieList from './MovieList';

export default function Home(){
     const [trending,setTrending]=useState([])
    async function getMovies(){
        const url=process.env.REACT_APP_SERVER_URL;
        //  console.log(11111,url);

        const response = await fetch(`${url}/trending`);
         console.log(2222,response);
        const trendingData = await response.json()
          console.log(3333,trendingData);
        

        // const movieData = await response.json();
        
       
         setTrending(trendingData);
         console.log(4444,trending);
      

    }
     useEffect(()=>{
        getMovies()
     },[])  
    return(
        <>
        
        <MovieList  trending={trending}/>
        </>
    )
}