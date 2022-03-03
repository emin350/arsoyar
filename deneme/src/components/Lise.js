import React from 'react'
import "./Cards.css"
import Footer from './Footer'
import Navbar from './Navbar'

function Lise() {
    return (
        <div>
            <Navbar/>
            <div className="ilk">
            <div className="ilk2">
           <p> <i class="fas fa-check"></i>   Haftada 1 gün 1 saat 100 tl Haftada 2 gün 2 saat 200 tl </p>
           <p> <i class="fas fa-check"></i>  Haftada 1 gün 2 saat 150 tl Haftada 2 gün 4 saat 300 tl </p>
           <p> <i class="fas fa-check"></i>  Haftada 3 gün 6 saat 400 Aynı anda 2 öğrenci olursa öğrenci başı 50 lira olur Kaynak önerisinde bulunulur. </p>
           <p> <i class="fas fa-check"></i>  Öğrenilen konularla alakalı doküman desteğimiz vardır. Oxford yayınlarından online üzerinden ders anlatılır. </p>
           <p> <i class="fas fa-check"></i>  Online derslerimiz de olur. Online ders saat başı 75 lira </p>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Lise
