import React from 'react';
import '../assets/css/Header.css';
// Imágenes
import LogoSolo from '../assets/images/LogoSolo.png';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';

const Header = () => (
    <header className="header">
        <nav className="header__menu">
            <ul className="header__menu-list">
                <li>
                    <a className="header__menu-element">Inicio</a>
                </li>

                <li >
                    <a className="header__menu-element">Sobre mí</a>
                </li>

                <li >
                    <a className="header__menu-element">Portafolio</a>
                </li>

                <li>
                    <img id="header__menu-logo" src={LogoSolo} alt="Programación&+"/>
                </li>

                <li>
                    <a className="header__menu-element">Podcast</a>
                </li>

                <li>
                    <a className="header__menu-element">Cursos</a>
                </li>

                <li>
                    <a className="header__menu-element">Contacto</a>
                </li >
            </ul >

            <div className="header__social">
                <a href="https://www.facebook.com/ArturoCH0" target="_blank" rel="noreferrer">
                    <img className="header__social-img" src={facebook} alt="Facebook"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sígueme en Facebook"/>
                </a>

                <a href="https://www.instagram.com/arturocamach0/" target="_blank" rel="noreferrer">
                    <img className="header__social-img" src={instagram} alt="Instagram"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sígueme en Instagram"/>
                </a>

                <a href="https://twitter.com/arturo_camacho0" target="_blank" rel="noreferrer">
                    <img className="header__social-img" src={twitter} alt="Twitter"
                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sígueme en Twitter"/>
                </a>
            </div>
        </nav >
    </header>
);

export default Header;
