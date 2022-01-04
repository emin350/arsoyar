import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg bg-primary navbar-dark p-4 fixed-top">

      <div className="container">

        <Link to={`/`} className="navlink navbar-brand" style={{ color: "white" }} >ARSOY AR</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">

          <ul className="navbar-nav ml-auto">

            <li className="nav-item">

              <Link to={`/Hakkımızda`} className="navlink nav-link" style={{ color: "white" }}> HAKKIMIZDA</Link>

            </li>

          
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                DERSLER
              </a>
              <div class="dropdown-menu bg-primary">
                <Link to={`/Ozelders`} className="navlink nav-link"> Ders Notları</Link>
                
              </div>
            </li>


          
        


            <li className="nav-item">

              <Link to={`/iletisim`} className=" navlink nav-link" style={{ color: "white" }} > İLETİŞİM </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
