import './App.css';
import { BrowserRouter as Router,Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Info from './pages/Info';
import Goal from './pages/Goal';
import Contact from './pages/Contact';
import React from 'react';

function App() {
  return (
    <Router>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">info</Link>
          </li>
          <li>
            <Link to="/product">Produto</Link>
          </li>
          <li>
            <Link to="/goal">Objetivo</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/info" Component={Info}/>
        <Route path="/product" Component={Product}/>
        <Route path="/goal" Component={Goal}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>

    </Router>
  );
}

export default App;
