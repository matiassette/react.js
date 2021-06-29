import React, {useState, useEffect} from 'react';
import CartWidget from './CartWidget';
import './_NavBar.scss';
import Logo from './logo.png';
import {Link, useParams} from 'react-router-dom';

function NavBar () {
        return (
            <div>
                <div className="App-header">
                    <Link to="/"><img src={Logo} alt="Logo matu-cloud" className="img-logo"></img></Link>
                    <nav>
                        <div>
                        <Link to="/">Inicio</Link>
                        <Link to="/products">Productos</Link>
                        <Link to="/contact">Contacto</Link>
                        </div>
                    </nav>
                    <CartWidget />
                </div>
                <div className="matu-cloud">
                    <h1>MatuCloud</h1>
                </div>
                <section class="background-attachment">
                    <p>Tus series y peliculas</p>
                </section>
                <div class="solid"></div>
            </div>
        );
}

export default NavBar;