
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
function  NavBar() {
    return (
     
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Movies List</Navbar.Brand>
                <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/FavList">fav-List</Nav.Link>
  
                </Nav>
            </Container>
        </Navbar>
    )

}

export default NavBar;

