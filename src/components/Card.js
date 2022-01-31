import React from 'react';
import Footer from "./Footer";
import photo from '../images/Cartoonizer_Arcane.jpeg'

export default function Card() {
    return (
        <div className="card">
            <img className="card-img-top" src={photo} alt="My photo" width="200rem" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <Footer />
        </div>
    )
}
