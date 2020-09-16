import { type } from 'os';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

type PrivateRouteProps = {
    children: React.ReactNode;
};

function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                false ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
