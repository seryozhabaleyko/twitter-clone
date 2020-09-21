import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Logout from './pages/Logout';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
    return (
        <div id="twitter">
            <Router>
                <Header />
                <Switch>
                    <PrivateRoute path="/" exact>
                        <Logout />
                    </PrivateRoute>
                    <Route path="/login">
                        <SignIn />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
