import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {}

function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/home',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
