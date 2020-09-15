import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Logout from './pages/Logout';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/">
                        <Logout />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
