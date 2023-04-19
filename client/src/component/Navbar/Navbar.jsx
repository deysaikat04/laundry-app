import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <>
      <div className="navcont">
        <div>
          <span>LAUNDRY</span>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link id="li" to={"/make-order"}>
                  Create order
                </Link>
              </li>
              <li>
                <Link id="li" to={"/view-order"}>
                  View order
                </Link>
              </li>
              <li>
                <Link id="li">Sign In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
