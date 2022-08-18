import React from 'react'
import { Link, NavLink } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            ></button>
            <Nav.Link className="navbar-brand mx-auto" href="/">
              <img src={logo}/>
            </Nav.Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/mac">
                    Mac
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/iphone">
                    iphone
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/ipad">
                    ipad
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/watch">
                    watch
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/tv">
                    TV
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/music">
                    Music
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/support">
                    Support
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/search">
                    <img src = {search}/>
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link js-scroll-trigger" href="/cart">
                    <img src = {cart}/>
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    
  );
}

export default Header