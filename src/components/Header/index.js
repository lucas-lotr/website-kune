import React from "react";
import "./style.css";
import {
    Navbar,
    Nav,
    NavItem,
    Button
    //NavDropdown,
    //MenuItem
} from "react-bootstrap";

const Header = props => {
    return (
        <Navbar id="navbar" fixedTop inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav id="navmenu" pullRight>
                    <NavItem className="nav" eventKey={1} href="#">
                        <Button>QUEM SOMOS</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={2} href="#">
                        <Button>TRABALHO</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={3} href="#">
                        <Button>NOSSOS CÃES</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={4} href="#">
                        <Button>APOIADORES</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={5} href="#colabore">
                        <Button>COLABORE</Button>
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
};

export default Header;
