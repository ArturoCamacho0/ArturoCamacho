import React, { Component } from 'react';

import menu from '../assets/images/menu.svg';
import LogoSolo from '../assets/images/LogoSolo.png';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';

import '../assets/css/HeaderMobile.css';

class HeaderMobile extends Component{
    state = { isActive: false };

    menuExpand = () => {
        this.setState({ isActive: !this.state.isActive });
        console.log(this.state.isActive);
    }

    render(){
        return(
            <React.Fragment>
                <header className="headerm">
                    <div className="headerm__item">
                        <p onClick={this.menuExpand}>
                            <img src={menu} alt="Menu" id="headerm__item-menu"/>
                        </p>
                        <h1>Arturo Camacho</h1>
                        <img src={LogoSolo} alt="Logo" />
                    </div>
                </header>

                <div id="menum" className={this.state.isActive ? "menum__active" : null}>
                    <p onClick={this.menuExpand}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </p>

                    <ul className="menum__list">
                        <li>
                            <a className="menum__list-item">Inicio</a>
                        </li>

                        <li >
                            <a className="menum__list-item">Sobre mí</a>
                        </li>

                        <li >
                            <a className="menum__list-item">Portafolio</a>
                        </li>

                        <li>
                            <a className="menum__list-item">Podcast</a>
                        </li>

                        <li>
                            <a className="menum__list-item">Cursos</a>
                        </li>

                        <li>
                            <a className="menum__list-item">Contacto</a>
                        </li >
                    </ul>

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
                </div>
            </React.Fragment>
        );
    }
}

export default HeaderMobile;