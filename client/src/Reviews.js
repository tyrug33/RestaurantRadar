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
  // PlaceHolder,
  Col,
  Row,
  Collapse
} from "react-bootstrap";

function Review() {
  // const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getUsers").then((response) => {
  //     setListOfUsers(response.data);
  //   });
  // }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getRestaurants").then((response) => {
      setListOfRestaurants(response.data);
    });
  }, []);

  // const createUser = () => {
  //   Axios.post("http://localhost:3001/createUser", {
  //     name,
  //     username,
  //     password,
  //   }).then((response) => {
  //     setListOfUsers([
  //       ...listOfUsers,
  //       {
  //         name,
  //         username,
  //         password,
  //       },
  //     ]);
  //   });
  // };

  return (
    // <div className="App">
    //   <div className="restaurantsDisplay">
    //     {listOfRestaurants.map((restaurant) => {
    //       return (
    //         <div>
    //           <h1>Name: {restaurant.restaurantName}</h1>
    //           <h1>Address: {restaurant.restaurantAddress}</h1>
    //           <h1>Average Star Rating: {restaurant.restaurantAvgStarRating}</h1>
    //         </div>
    //       );
    //     })}
    //   </div>

    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Name..."
    //       onChange={(event) => {
    //         setName(event.target.value);
    //       }}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Username..."
    //       onChange={(event) => {
    //         setUsername(event.target.value);
    //       }}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Password..."
    //       onChange={(event) => {
    //         setPassword(event.target.value);
    //       }}
    //     />
    //     <button onClick={createUser}> Create User </button>
    //   </div>
    // </div>

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
              {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Test</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Test</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Test</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
             <Nav.Link href="/login">Login</Nav.Link>
             <Nav.Link href="/reviews">Reviews</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
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
    </div>



  );
}

export default Review;