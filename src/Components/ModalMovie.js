 import Modal from 'react-bootstrap/Modal';
 import Button from 'react-bootstrap/Button';


 export default  function ModalMovie (props){
     return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.trendData.title}</Modal.Title>
        </Modal.Header>
         <img src={props.trendData.poster_path} alt={props.trendData.title}/>
         <Modal.Body>{props.trendData.overview}</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={props.handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={props.handleClose}>
             Add a favorite movies
           </Button>
         </Modal.Footer>
       </Modal>
     )
 }