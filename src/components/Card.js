import React from 'react';
import Footer from "./Footer";
import cartoon from '../images/Cartoonizer_Arcane.jpeg'

export default function Card() {
    return (
        <div className="card">
            <img className="card-img-top" src={cartoon} alt="My portrait" />
            <div className="card-body">
                <h2 className="card-title">Carmine Pastena</h2>
                <h5 className="card-text">Full-Stack Web Developer</h5>
                <div className="container-buttons">
                    <a href="mailto:carmine_pastena@alice.it" className="btn btn-email"><i className="fas fa-envelope"></i>Email</a>
                    <a href="https://www.linkedin.com/in/carmine-pastena-a34b4654/" className="btn btn-in"><i className="fab fa-linkedin"></i>LinkedIn</a>
                </div>
                <div className="container">
                    <h4 className="div-title">About</h4>
                    <p className="div-text">
                        I am a Full-Stack Web Developer with an interest of the variuos pragramming
                        languages and I am always happy to learn new things. 
                        My skills are HTML, CSS, JS that I use for the frontend and am learning React,
                        in the backend I use MySQL and MongoDB as Database and Python as language 
                        to build web app with Django and Flask.
                    </p>
                </div>
                <div className="container">
                    <h4 className="div-title">Interests</h4>
                    <p className="div-text">
                        Reader, Aikidoka, Trekking, Travel, Cooking Italian dishes.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
