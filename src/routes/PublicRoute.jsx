import React from 'react';

import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";


const PublicRoute = (props) => {
    console.log('why here')
    const {component: Component, ...rest} = props;
    const auth = useSelector(state => state.authReducer)
    return (
        <Route
            {...rest}
            render={props =>
                ((auth && auth.loggedIn) && (auth && auth.accessToken)) ? (
                    <Redirect
                        to={`/student/${auth.loginInUser.id}`}
                    />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PublicRoute;
