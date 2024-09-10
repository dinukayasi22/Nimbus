import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/footer';
import Booking from './pages/Booking';

const App = () => {
  return (
    <>
    <Router>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </ErrorBoundary>
    </Router>
      <Footer />
      </>
  );
};

export default App;
