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
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState("");

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/getRestaurants").then((response) => {
  //     setListOfRestaurants(response.data);
  //   });
  // }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      username,
      password,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          username,
          password,
        },
      ]);
    });
  };

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

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Restauarant Name..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Review..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={createUser}> Post Review </button>
      </div>


    

        );
        
}

export default Review;