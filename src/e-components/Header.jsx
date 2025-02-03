import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header({ searchTerm, setSearchTerm }) {
    const cartItems = useSelector((state) => state.cart.addedProducts)
    



    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">R-CART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            <NavDropdown title="Products" id="navbarScrollingDropdown">
                                <NavDropdown.Item >Jwellery</NavDropdown.Item>
                                <NavDropdown.Item >Electronics</NavDropdown.Item>
                                <NavDropdown.Item >Cloths</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) =>  setSearchTerm(e.target.value)

                                }
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link as={Link} to="/cart" style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16" >
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <p style={{ borderRadius: "50%", padding: "0px 6px", background: "green", color: "white" }}> {cartItems.length}</p>
                        </Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default Header