import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Enquiry from './Enquiry';

const Home = () => <h2>Home page</h2>;
const Aboutus = () => <h2>Aboutus page</h2>;
const Product = () => <h2>Product page</h2>;
const Contact = () => <h2></h2>

const Navbar = () => {
  return (
    <div position="relative">
        <ul>
            <li>
                <Link to="/" className='nav-link'><b>Home</b></Link>
            </li>
            <li>
                <Link to="/aboutus" className='nav-link'><b>Aboutus</b></Link>
            </li>
            <li>
                <Link to="/services" className='nav-link'>Services</Link>
            </li>
            <li>
                <Link to="/contact" className='nav-link'>Contact</Link>
                
            </li>
        </ul>
    </div>

   
   
  )
}

export default Navbar


