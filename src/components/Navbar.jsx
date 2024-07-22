import React from 'react'
import {Link } from "react-router-dom";

function Navbar() {
    console.log("we are in the navbar component");
  return (
<>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className='container-fluid'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/new">
                  New
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/inprogress">
                  In Progress
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/complete">
                  Complete
                </Link>
              </li> 
            </ul>
          </div>
        </nav>
</>    
  )
}

export default Navbar