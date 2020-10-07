import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Logout from './pages/Logout';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Tweet from './pages/Tweet';

function App() {
    return (
        <div id="twitter">
            <Router>
                <Switch>
                    <PrivateRoute path="/" exact>
                        <Logout />
                    </PrivateRoute>
                    <Route path="/login">
                        <SignIn />
                    </Route>
                    <Route path="/home">
                        <Header />
                        <Home />
                    </Route>
                    <PrivateRoute path="/:nickname/tweet/:id">
                        <Tweet />
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
