import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  Button,
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  Col,
  Row,
  Collapse
} from "react-bootstrap";

function Home() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);



  useEffect(() => { {/* Axios link to grab the restaurants from the mongodb */}
    Axios.get("http://localhost:3001/getRestaurants").then((response) => {
      setListOfRestaurants(response.data);
    });
  }, []);



  return (

    <div className="App">
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#">RestaurantRadar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/login">Login</Nav.Link>
             <Nav.Link href="/reviews">Reviews</Nav.Link> {/* Navbar links */}

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search" {/* Search bar implementation */}
                className="me-2"
                aria-label="Search"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="usersDisplay">
        <Row xs={2} md={3} className="g-4">
        {listOfRestaurants.map((restaurant, idx) => {
          const searchString = search.toLowerCase();
          if (!restaurant.restaurantName.toLowerCase().includes(searchString)) {
            return null
          }
          return (

              <><Col key={idx} className="d-flex justify-content-center">
              <Card style={{ width: "20rem", justifyContent: 'space-between' }}>
                <Card.Img variant="top" src="defaultrest.jpg"></Card.Img>
                <Card.Body>
                  <Card.Title>Name: {restaurant.restaurantName}</Card.Title>
                  <Card.Text>
                    Address: {restaurant.restaurantAddress} Rating: {restaurant.restaurantAvgStarRating}
                  </Card.Text> {/* Restaurant card data*/} 
                </Card.Body>
              </Card>
            </Col>
            
            </>
          );
          
        })}
        </Row>
      </div>


    </div>



  );
}

export default Home;