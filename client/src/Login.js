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
    Row
  } from "react-bootstrap";

  import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");  


    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='username' onChange={(event) => {
            setName(event.target.value);
        }}/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(event) => {
            setPassword(event.target.value)}}/>
  
        <div className="d-flex justify-content-between mx-3 mb-4">
        </div>
        <button onClick={console.log(name)} type="button" class="btn btn-primary"> Create User </button>
 
        <div className="text-center">
        </div>
  
      </MDBContainer>

    );
}

export default Login;