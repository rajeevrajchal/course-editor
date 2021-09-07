import React from 'react';

import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const PrivateRoute = (props) => {
    const {component: Component, ...rest} = props;
    const auth = useSelector(state => state.authReducer)
    return (
        <Route
            {...rest}
            render={props =>
                ((auth && auth.loggedIn) && (auth && auth.accessToken)) ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={'/login'}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
