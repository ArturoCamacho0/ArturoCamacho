import React from 'react';

// Components
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Content from '../containers/Content';
import Reproductor from '../components/Reproductor';

const App = () => (
    <div className="App">
        <Header />
        <HeaderMobile />
        <Content />
        <div className="separator"></div>
        <div className="separator"></div>
        <Reproductor />
    </div>
);

export default App;