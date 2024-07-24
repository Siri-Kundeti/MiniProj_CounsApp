import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/header.css'
import Login from './Login';
const Header = () => {
    return (
        <div id='header1'>
        <Container fluid>
        <div className="title-holder">
          <h2>COUNSILING MANAGEMENT SYSTEM </h2>
          <div className="subtitle">Educational Institute Software </div>
        </div>
        </Container>
       
        </div>
         
        
    );
};

export default Header;