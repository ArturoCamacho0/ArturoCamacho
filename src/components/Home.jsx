import React from 'react';

import '../assets/css/Home.css';

import yo from '../assets/images/yo.jpg';

const Home = () => (
    <React.Fragment>
        <section className="home">
            <img src={yo} alt="Arturo Camacho"/>
            <h1>Buenos días, tardes, noches...</h1>
            <p>
            Soy Arturo y me gusta mucho aprender siempre cosas nuevas, cada día trato de aprender algo nuevo.
            Esto me ha llevado a compartir mis conocimientos mediante diversos medios, principalmente
            por medio de un Podcast el cual te invito a escuchar para saber más de mi y mi amor por
            la programación.
            </p>
        </section>
    </React.Fragment>
);

export default Home;