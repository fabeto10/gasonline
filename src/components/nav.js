import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
export function NavR() {
  // const [state, setState]  = useState('User');
  const [ value, setValue] = useState('/');
  // function getRef () {
  //   if(state === 'User'){
  //     setValue('/admin');
  //     setState('/')
  //   } else if(state === 'Admin') {
  //     setValue('/');
  //   };
  // };

  return (
    <div style={{zIndex: '0'}}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{zIndex: '1'}}>
        <Container>
          <Navbar.Brand>{"Admin"}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink href={'/'} >
                  {"User"}
                </NavLink>
                <NavLink  href={'/admin'}>
                  {"Admin"}
                </NavLink>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};