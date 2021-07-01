import React from 'react';

import Home from '../components/Home';

import '../assets/css/Content.css';

const App = () => (
    <React.Fragment>
        <div className="separator"></div>
        <div className="Content">
            <Home/>
        </div>
    </React.Fragment>
);

export default App;