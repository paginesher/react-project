import React from 'react';
import './App.css';
import Home from './WebPages/Home';
import Product from './WebPages/Product';
import Contact from './WebPages/Contact';
import {Route, Link} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/product' component={Product} />
      <Route exact path='/contact' component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
