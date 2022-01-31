import React from 'react';
import Footer from "./Footer";
import cartoon from '../images/Cartoonizer_Arcane.jpeg'

export default function Card() {
    return (
        <div className="card">
            <img className="card-img-top" src={cartoon} alt="My portrait" />
            <div className="card-body">
                <h2 className="card-title">Carmine Pastena</h2>
                <p className="card-text">Text</p>
                {/* <a href="#" className="btn">Go somewhere</a> */}
            </div>
            <Footer />
        </div>
    )
}
