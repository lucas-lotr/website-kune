import React from "react";
import "./style.css";
import faceIcon from "./icon-face.svg";
import instaIcon from "./icon-insta.svg";
import logoBranco from "./logo-kune-branco.svg";

import {
    Navbar,
    Nav,
    NavItem,
    Button,
    Image
    //NavDropdown,
    //MenuItem
} from "react-bootstrap";

const Header = props => {
    function navScroll() {
        setTimeout(function() {
            window.scrollBy(0, -90);
        }, 10);
    }

    return (
        <Navbar id="navbar" fixedTop inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">
                        <img
                            className="logo-top"
                            src={logoBranco}
                            alt="Kuné Brasil"
                        />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav id="navmenu" pullRight>
                    <NavItem className="nav" eventKey={1} href="#sobre">
                        <Button onClick={navScroll}>QUEM SOMOS</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={2} href="#">
                        <Button onClick={navScroll}>TRABALHO</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={3} href="#">
                        <Button onClick={navScroll}>NOSSOS CÃES</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={4} href="#">
                        <Button onClick={navScroll}>APOIADORES</Button>
                    </NavItem>
                    <NavItem className="nav" eventKey={5} href="#colabore">
                        <Button onClick={navScroll}>COLABORE</Button>
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                        <img
                            className="social-icon"
                            src={faceIcon}
                            alt="face"
                        />
                    </NavItem>
                    <NavItem className="nav" eventKey={7} href="#">
                        <img
                            className="social-icon"
                            src={instaIcon}
                            alt="insta"
                        />
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
