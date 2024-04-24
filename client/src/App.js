
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
          <Route path="/login" element={<Login />} /> {/* Routes for each web page */}
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

