import React from 'react';
import "./Header.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import b2 from "../İmages/b2.jpg";
import b3 from "../İmages/b3.jpg";



function Header() {
    return (
        <div className="Header">
            <Carousel>

           
               <Carousel.Item>
                    <img src={b2} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={b3} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>


            </Carousel>
        </div>
    )
}

export default Header
