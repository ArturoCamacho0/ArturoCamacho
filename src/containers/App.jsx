import React from 'react';

// Components
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Content from '../containers/Content';

const App = () => (
    <div className="App">
        <Header />
        <HeaderMobile />
        <Content />
    </div>
);

export default App;