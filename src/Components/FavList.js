
    import {useEffect, useState} from 'react';
    import Card from "react-bootstrap/Card";
    import Button from "react-bootstrap/Button";
    
    
    export default function FavList(){
    
        const [FavList,setFavList ] = useState([]);
    
    
        async function getFavList(){
            let url =`${process.env.REACT_APP_SERVER_URL}/getMovies`;
    
            let response = await fetch(url,{
                method: 'GET',
            })
    
            let recivedData = await response.json();
            setFavList(recivedData)
    
           
        }
    
        async function handleDelete(id){
            let url =`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;
    
            let response = await fetch(url,{
    
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
            })
      
    
            if(response.status === 204){
                getFavList();
                 alert("successfully deleted !!")
    
            }
        }
        

        async function handleUpdate(id){
            let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
    
            let response = await fetch(url,{
    
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
            })
    
        }
       
        useEffect(()=>{
            getFavList();
    
            // console.log(favRecipes)
    
        },[])
    
    
    
        return(
            <>
            <h2> this is Fav recipes Page</h2>
    
            {
                FavList && FavList.map(trend=>{
                    return(
                        <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={trend.poster_path} />
                        <Card.Body>
                          <Card.Title>{trend.title}</Card.Title>
                          <Card.Text>{trend.comments}</Card.Text>
                          <Button variant="primary" onClick={()=>handleDelete(trend.id)}> Delete </Button>
                          <p></p>
                          <Button variant="primary" onClick={()=>handleUpdate(trend.id)}> Update </Button>
                        </Card.Body>
                      </Card>
                    )
    
    
                })
            }
            </>
        )
    }