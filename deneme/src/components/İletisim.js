import React from 'react';
import Navbar from './Navbar';
import './Hakkımızda.css';
import Footer from './Footer';

function İletisim() {
    return (
        <div>
            <Navbar />
            <div className="iletisim">
            <div className="iletisimm">
                <h1> İLETİŞİM </h1>
                <p>   Mehmetçik,2581.Sk. No:11/A, 20190
                            Pamukkale/Denizli  </p>

                <p>  Gsm:(0551) 058 00 10  </p>

                <p>   E-Mail: arsoyar@gmail.com </p>

            </div>
        </div>   

            <Footer />
        </div>
    )
}

export default İletisim
