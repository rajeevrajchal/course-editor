import React from 'react';
import {Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import Landing from "../modules/landing";
import CodeEditor from "../modules/editor";
import Login from "../modules/auth/views/login";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact={true} component={Landing}/>
            <Route path='/login' exact={true} component={Login}/>
            <Route path='/codeEditor' exact={true} component={CodeEditor}/>
            <Route path='/' exact={true} component={Landing}/>
        </Switch>
    );
};

Routes.prototype = {
    routes: PropTypes.array.isRequired
}
export default Routes;
