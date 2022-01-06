import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.15731465178297!2d29.08672807598679!3d37.75447323195716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73f1c005d85a9%3A0x2a88ecf60ed6c540!2sMehmet%C3%A7ik%2C%202581.%20Sk.%2C%2020150%20Pamukkale%2FDenizli!5e0!3m2!1str!2str!4v1641330207361!5m2!1str!2str" style={{ width: "100%", height: "40vh" }}></iframe>
            </div>
            <footer className="py-5 bg-success text-white text-center">
                <div className="container clearfix  ">

                    <div className="col">
                        <div>
                            İLETİŞİM
                        </div>
                        <div>
                            Mehmetcik mahallesi 2581 Sk. No:11/A 20190
                            Pamukkale/Denizli
                        </div>

                        <div>
                            05510580010
                        </div>
                        <div>
                            arsoyar@gmail.com
                        </div>
                    </div>
                    <div className="col"> copyright © Your Website 2021</div>
                </div>
            </footer>
        </div>

    )
}
export default Footer
