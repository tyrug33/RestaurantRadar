
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Import your home page component
import Login from './Login'; // Import your login page component
import Review from './Reviews';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
