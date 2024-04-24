
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Import your home page component
import Login from './Login'; // Import your login page component
import Signup from "./Signup";
import Profile from "./Profile";
import Review from './Reviews';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<Review />} />
          <Route path = "/login/signup" element = { <Signup></Signup> } ></Route>
          <Route path = "/login/profile" element = { <Profile></Profile> }></Route>
          <Route path="/" element={<Home />} /> {/* Home page route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import "./App.css";
// import { useState, useEffect } from "react";
// import Axios from "axios";

// function App() {
//   const [listOfUsers, setListOfUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     Axios.get("http://localhost:3001/getUsers").then((response) => {
//       setListOfUsers(response.data);
//     });
//   }, []);

//   const createUser = () => {
//     Axios.post("http://localhost:3001/createUser", {
//       name,
//       age,
//       username,
//     }).then((response) => {
//       setListOfUsers([
//         ...listOfUsers,
//         {
//           name,
//           age,
//           username,
//         },
//       ]);
//     });
//   };

//   return (
//     <div className="App">
//       <div className="usersDisplay">
//         {listOfUsers.map((user) => {
//           return (
//             <div>
//               <h1>Name: {user.name}</h1>
//               <h1>Age: {user.age}</h1>
//               <h1>Username: {user.username}</h1>
//             </div>
//           );
//         })}
//       </div>

//       <div>
//         <input
//           type="text"
//           placeholder="Name..."
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         />
//         <input
//           type="number"
//           placeholder="Age..."
//           onChange={(event) => {
//             setAge(event.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Username..."
//           onChange={(event) => {
//             setUsername(event.target.value);
//           }}
//         />
//         <button onClick={createUser}> Create User </button>
//       </div>
//     </div>
//   );
// }

// export default App;