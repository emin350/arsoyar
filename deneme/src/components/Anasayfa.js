import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'
import Cardiki from './Cardiki'

function Anasayfa() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Cards/>
            <hr/>
            <Cardiki/>
            <Footer/>
        </div>
    )
}

export default Anasayfa
