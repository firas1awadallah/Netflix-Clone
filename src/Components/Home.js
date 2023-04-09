import{ useState, useEffect } from 'react';
import MovieList from './MovieList';

export default function Home(){
     const [trending,setTrending]=useState([])
    async function getMovies(){
        const url=process.env.REACT_APP_SERVER_URL;
        

        const response = await fetch(`${url}/trending`);
         //console.log(2222,response);
        const trendingData = await response.json()
          // console.log(3333,trendingData);
        
        
       
         setTrending(trendingData);
        //  console.log(4444,trending);
      
    }
    function commentHandler(newTrend , id){
        trending.map(trend=>{
            if(trend.id === id){
                
                trend.comments = newTrend.userComment
                console.log(11111,trend)
                return trend;
            }else{
                return trend
            }
        })
    }

     useEffect(()=>{
        getMovies()
     },[])  
    return(
        <>
        
        <MovieList  trending={trending} commentHandler={commentHandler}/>
        </>
    )
}