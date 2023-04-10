 import Modal from 'react-bootstrap/Modal';
 import Button from 'react-bootstrap/Button';
 import Form from 'react-bootstrap/Form';
 import {useRef } from 'react';

 export default  function ModalMovie (props){
  const commentRef = useRef();

  function submitHandler(e){
    e.preventDefault();
    let userComment = commentRef.current.value;

    let newTrend={...props.trendData, userComment}
    console.log(newTrend);

    props.commentHandler(newTrend,newTrend.id);
  }

  async function addToFavHandler(e){
    e.preventDefault();
  
    let url =`${process.env.REACT_APP_SERVER_URL}/addMovie`;

    let data={
      title: props.trendData.title,
      release_date: props.trendData.release_date,
      
      poster_path : props.trendData.poster_path,
      comments : props.trendData.comments
  
    }
    const response = await fetch (url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const receivedData = await response.json();
  console.log(1111,receivedData)

  if (response.status ===201){
    alert("successfully added to database")
  }

}

     return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.trendData.title}</Modal.Title>
        </Modal.Header>
         <img src={`https://image.tmdb.org/t/p/w500${props.trendData.poster_path}`} alt={props.trendData.title}/>
         <Modal.Body>
        
        {props.trendData.comments? props.trendData.comments: "No comment Added "}
        <br/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control  ref={commentRef} type="text" placeholder="Enter your comment " />
            <Form.Text className="text-muted">enter your comment !!</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
            Submit
          </Button>
          <pre></pre>
          <Button variant="primary" type="submit" onClick={(e)=>addToFavHandler(e)}>
            add to fav
          </Button>
        </Form>
        </Modal.Body>
         

         <Modal.Footer>
           <Button variant="secondary" onClick={props.handleClose}>
             Close
           </Button>
           
         </Modal.Footer>
       </Modal>
     )
 }