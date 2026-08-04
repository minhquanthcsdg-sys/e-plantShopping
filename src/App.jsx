import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Plants</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="cart-link">
          🛒 Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

const Landing = () => {
  const handleGetStarted = () => {
    // Navigate to products page
    window.location.href = '/products';
  };

  return (
    <div className="landing background-image">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Bring Nature Indoors</p>
      <p className="subtitle">
        Discover our curated collection of house plants that will transform your
        living space into a green paradise.
      </p>
      <button className="btn-primary" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
