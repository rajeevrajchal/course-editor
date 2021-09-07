import React from 'react';
import {Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import StudentDashboard from "../modules/student-dash";
import Login from "../modules/auth/views/login";
import Landing from "../modules/landing";
import CodeEditor from "../modules/editor";

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path='/student/:id' exact={true} component={StudentDashboard}/>
            <PublicRoute path='/login' exact={true} component={Login}/>
            <Route path='/' exact={true} component={Landing}/>
            <Route path='/codeEditor' exact={true} component={CodeEditor}/>
        </Switch>
    );
};

Routes.prototype = {
    routes: PropTypes.array.isRequired
}
export default Routes;
