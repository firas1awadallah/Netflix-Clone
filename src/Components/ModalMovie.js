 import Modal from 'react-bootstrap/Modal';
 import Button from 'react-bootstrap/Button';
 import FloatingLabel from 'react-bootstrap/FloatingLabel';
 import Form from 'react-bootstrap/Form';
 

 export default  function ModalMovie (props){
     return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.trendData.title}</Modal.Title>
        </Modal.Header>
         <img src={props.trendData.poster_path} alt={props.trendData.title}/>
         <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>

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