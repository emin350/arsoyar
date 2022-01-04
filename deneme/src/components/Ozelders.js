import React from 'react';
import "./Header.css";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import d1 from "../İmages/d1.jpeg";
import d2 from "../İmages/d2.jpeg";
import d3 from "../İmages/d3.jpeg";
import d4 from "../İmages/d4.jpeg";
import d5 from "../İmages/d5.jpeg";
import Navbar from './Navbar';
import Footer from './Footer';


function Ozelders() {
    return (
        <div className="ozelders">
            <Navbar/>
            <Carousel>

           
               <Carousel.Item>
                    <img src={d1} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>
  
                <Carousel.Item>
                    <img src={d2} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={d3} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={d4} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={d5} className="img-fluid w d-block mx-auto" alt="" />
                </Carousel.Item>

                


            </Carousel>

            <Footer/>
        </div>
    )
}

export default Ozelders
