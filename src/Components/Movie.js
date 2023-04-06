 import Card from "react-bootstrap/Card";
 import Button from "react-bootstrap/Button";
 import ModalMovie from "./ModalMovie";
 import {useState} from 'react';

export default function Movie(props) {

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
     <>
      <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={props.trend.poster_path} />
         <Card.Body>
           <Card.Title>{props.trend.title}</Card.Title>
           <Card.Text>{props.trend.release_date}</Card.Text>
           <Button variant="primary" onClick={handleShow}> add to favorite list</Button>
         </Card.Body>
       </Card>

       <ModalMovie show={show}  handleClose={handleClose} trendData = {props.trend} />
       
     </>
   );
 }