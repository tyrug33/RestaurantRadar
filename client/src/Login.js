// import "./App.css";
// import { useState, useEffect } from "react";
// import Axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// import {
//     Button,
//     Card,
//     Nav,
//     Navbar,
//     NavDropdown,
//     Container,
//     Form,
//     // PlaceHolder,
//     Col,
//     Row
//   } from "react-bootstrap";

//   import {
//     MDBContainer,
//     MDBInput,
//     MDBCheckbox,
//     MDBBtn,
//     MDBIcon
//   }
//   from 'mdb-react-ui-kit';

// function Login() {
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");  


//     return (
//         <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//         <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='username' onChange={(event) => {
//             setName(event.target.value);
//         }}/>
//         <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(event) => {
//             setPassword(event.target.value)}}/>
  
//         <div className="d-flex justify-content-between mx-3 mb-4">
//         </div>
//         <button onClick={console.log(name)} type="button" class="btn btn-primary"> Create User </button>
 
//         <div className="text-center">
//         </div>
  
//       </MDBContainer>

//     );
// }

// export default Login;

import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login1 = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("./profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return(
        <div className = "container">
            <div className = "row justify-content-center">
                <form className = "col-md-4 mt-3 pt-3 pb-3">
                    { "" !== notice &&
                        <div className = "alert alert-warning" role = "alert">
                            { notice }    
                        </div>
                    }                  
                    <div className = "form-floating mb-3">
                        <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                        <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
                    </div>
                    <div className = "form-floating mb-3">
                        <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                        <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                    </div>
                    <div className = "d-grid">
                        <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                    </div>
                    <div className = "mt-3 text-center">
                        <span>Need to sign up for an account? <Link to = "./signup">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login1