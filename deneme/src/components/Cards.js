import React from 'react'
import "./Cards.css"
import { Link } from "react-router-dom";


function Cards() {

    return (
     
        <div className="row">

<div className="col-md-6">
                <Link to={`/İlkogretim`} className="Link">
                    <div className="card">
                       <div className="card-body">
                            <h4 className="card-title">
                                İLKÖĞRETİM
                            </h4>
                            <p className="card-text">
                             
                                <p> <i className="far fa-calendar-alt"></i> Okul derslerine destek </p>
                                <p> <i className="fas fa-road"></i> Akıcı bir ingilizce konuşabilmek için özel dersler verilir. </p>
                                <p className="bilgi"> Daha fazla bilgi <i class="fas fa-arrow-right"></i>  </p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>



            <div className="col-md-6">
                <Link to={`/Lise`} className="Link">
                    <div className="card">
                        
                        <div className="card-body">
                            <h4 className="card-title">
                                LİSE
                            </h4>
                            <p className="card-text">
                                
                                <p> <i class="fas fa-graduation-cap"></i> Kolej ingilizcesinde zorlananlara takviye </p>
                                <p> <i class="fas fa-user-graduate"></i> Dil bölümü öğrencilerine YDT hazırlık derslerimiz vardır </p>
                                <p className="bilgi"> Daha fazla bilgi <i class="fas fa-arrow-right"></i>  </p>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>



            


       </div>
    )
}

export default Cards





