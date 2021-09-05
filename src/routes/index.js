import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import {map} from 'lodash'

const Routes = ({routes}) => {
    return (
        <Router>
            <Switch>
                {
                    map(routes, (route) => (
                        <Route path={route.path} exact={route.exact} key={route.label}>
                            {route.component}
                        </Route>
                    ))
                }
            </Switch>
        </Router>
    );
};

Routes.prototype = {
    routes: PropTypes.array.isRequired
}
export default Routes;
