import React, { useContext, useState } from 'react';
import { useAuth } from '../../context/Auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Section from './Section';

const Head = () => {
    const [auth, setAuth] = useAuth();
    // const { cartItems  } = useContext(CartContext)
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      toast.success("Logout Successfully");
    };
    // const [menuVisible, setMenuVisible] = useState(false);
    // const titleStyle = {
    //   fontFamily: 'Quicksand, sans-serif',
    //   fontWeight: 'bold',
    // };
    // const toggleMenu = () => {
    //   setMenuVisible(!menuVisible);
    // };
    // const closeMenu = () => {
    //   setMenuVisible(false);
    // };
    return (
        <div id='header'>
           <Container fluid>
        <div className="title-holder">
          <h2>Faculty Page</h2>
        </div>
        </Container>
        <Navbar expand="lg" className="bg-body-tertiary" style={{marginTop:'0.1cm'}}>
        <Container>
       
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: '0cm' }}>
            
                    <>
                    <li className="nav-item">
                      <Link to="/fviewStudent" className="nav-link">
                        View Students
                      </Link>
                    </li>
                    &nbsp;&nbsp;
                    <li className="nav-item">
                      <Link to="/fmodifyStudent" className="nav-link">
                       Modify Students
                      </Link>
                    </li>
                    &nbsp;&nbsp;
                    <li className="nav-item">
                      <Link to="/faddStudentActs" className="nav-link">
                        Add Student Academic Activities
                      </Link>
                    </li>
                    &nbsp;&nbsp;
                    <li className="nav-item">
                      <Link to="/faddStudentMarks" className="nav-link">
                        Add Student Marks
                      </Link>
                    </li>
                    &nbsp;&nbsp;
                   
                  </>
                </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
        </div>
       
    );
};

export default Head;