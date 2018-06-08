import React, { Component } from 'react';
/* React Router Dom */
import { Router, Route, Switch, Redirect } from "react-router-dom";

class CustomRouter extends Component {
    componentWillMount() {
        if (this.props.history.location.pathname.match('404')) this.props.onRouteChange(false);
        else this.props.onRouteChange(true);
        this.unlisten = this.props.history.listen((location, action) => {
            if (location.pathname.match('404'))
                this.props.onRouteChange(false)
            else
                this.props.onRouteChange(true)
        })
    }
    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const { history, routes } = this.props;
        return (
            <Router history={history}>
                <Switch>
                    {routes.map((prop, key) => {
                        if (prop.exact)
                            return <Route exact path={prop.path} key={key} render={() => (
                                <Redirect to={`${process.env.PUBLIC_URL}/dashboard`} />
                            )}></Route>
                        else
                            return <Route path={prop.path} component={prop.component} key={key}></Route>
                    })}
                    <Route render={() => (<Redirect to={`${process.env.PUBLIC_URL}/404`} />)}></Route>
                </Switch>
            </Router>
        )
    }
}

export default CustomRouter;