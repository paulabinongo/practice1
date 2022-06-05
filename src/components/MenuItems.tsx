import React from 'react'
import {Nav, Navbar, NavLink, Dropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.bundle';

const MenuItems = () => {
  return (
    <Navbar collapseOnSelect expand="sm">
        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" className="text-white"/>
            <Navbar.Collapse id="navbarScroll" className="text-white">
                <Nav>
                    <NavLink className="text-light" eventKey="1" as={Link} to="/"> Home</NavLink>
                    <NavLink className="text-light" eventKey="2" as={Link} to="/login">Login</NavLink>
                
<li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      </Nav>
          </Navbar.Collapse>
   </Navbar>
  )
}

export default MenuItems