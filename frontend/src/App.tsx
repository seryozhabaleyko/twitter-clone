import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Header from './components/Header';
import Footer from './components/Footer';
import Logout from './pages/Logout';
import SignIn from './pages/SignIn';

function App(): React.ReactElement {
    return (
        <>
            <Router>
                {/* <Header /> */}
                <Switch>
                    <Route path="/" exact>
                        <Logout />
                    </Route>
                    <Route path="/login">
                        <SignIn />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
