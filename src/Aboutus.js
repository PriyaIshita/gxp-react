import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

const Aboutus = () => {
  return (
    <>
    {/* <div style={{ position: 'absolute', top:'115px',left: '38px',textAlign:'right', padding:'10px',margin:'20px', justifyContent:'space-between',gap:'50px'}}>
    <ul style={{}}>
        <li style={{display: 'inline', padding: '10px 40px',  }}>
            <Link style={{color:'white', fontSize:'17px', textDecoration:'none',}}  to="/">Home</Link>
        </li>
        <li style={{display: 'inline', padding: '10px 40px',}}>
            <Link style={{color:'white', fontSize:'17px', textDecoration:'none' }} to="/aboutus">Aboutus</Link>
        </li>
        <li  style={{display: 'inline', padding:'10px 40px', }}>
            <Link style={{color:'white', fontSize:'17px',textDecoration:'none'}} to="/services">Services</Link>
        </li>
        <li  style={{display: 'inline', padding:'10px 40px',listStyleType:'none' }}>
            <Link style={{color:'white', fontSize:'17px', textDecoration:'none'}} to="/contact">Contact</Link>
        </li>
    </ul>
</div> */}

 <div style={{ position: 'absolute', top:'229px',left: '42px',textAlign:'center',}}>
    <h1 color='White'>About GxP Compliance Partners</h1>
    <h3>GxP Compliance Partner is a specialized service provider offering comprehensive Computer System 
Validation (CSV) solutions to regulated industries such as pharmaceuticals, biotechnology, medical 
devices, and healthcare. We support organizations in meeting their validation and data integrity 
requirements through risk-based, cost-effective, and sustainable solutions. </h3>
<h3>
Our experts bring decades of combined experience in CSV, quality assurance, regulatory compliance, 
and IT systems. We partner with our clients from project initiation through to post-implementation 
support, ensuring that computerized systems are validated, secure, and compliant throughout their 
lifecycle. professional business profile for a Computer System Validation (CSV) Service Provider, 
elaborated to showcase the full scope of services, industry relevance, expertise, and business value. 
This version is suitable for use in brochures, websites, investor decks, or proposals.</h3>
    </div>
</>
  )
}

export default Aboutus;
