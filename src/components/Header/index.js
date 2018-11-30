import React from 'react';
import './style.css';
import {
    Navbar,
    Nav,
    NavItem
    //NavDropdown,
    //MenuItem
     } from 'react-bootstrap';

const Header = (props) => {

    return(
        
        <Navbar className="nav" fixedTop inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem className="nav" eventKey={1} href="#">
                        QUEM SOMOS
                    </NavItem>
                    <NavItem className="nav" eventKey={2} href="#">
                        TRABALHO
                    </NavItem>
                    <NavItem className="nav" eventKey={3} href="#">
                        NOSSOS CÃES
                    </NavItem>
                    <NavItem className="nav" eventKey={4} href="#">
                        APOIADORES
                    </NavItem>
                    <NavItem className="nav" eventKey={5} href="#colabore">
                        COLABORE
                    </NavItem>
                    <NavItem className="nav" eventKey={6} href="#">
                        FB
                    </NavItem>
                    <NavItem className="nav" eventKey={7} href="#">
                        INSTA
                    </NavItem>
                    {/* <NavDropdown eventKey={8} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={8.1}>Action</MenuItem>
                        <MenuItem eventKey={8.2}>Another action</MenuItem>
                        <MenuItem eventKey={8.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={8.3}>Separated link</MenuItem>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );

}

export default Header;
