import React from 'react';
import styles from './App.css'
import Header from '../Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from '../Routes/Routes'

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <div className={styles.container}>
                  <Routes />  
                </div>
            </div>
        </Router>
    );
};

export default App;