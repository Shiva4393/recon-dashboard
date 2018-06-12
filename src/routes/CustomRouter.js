import React, { Component } from 'react';
/* React Router Dom */
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

class CustomRouter extends Component {
    componentWillMount() {
        this.props.onRouteChange(hist.location);
        this.unlisten = hist.listen((location, action) => {
            this.props.onRouteChange(location);
        })
    }
    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const { routes } = this.props;
        return (
            <Router history={hist}>
                <Switch>
                    {routes.map((prop, key) => {
                        if (prop.exact)
                            return <Route exact path={prop.path} key={key} render={() => (
                                <Redirect to={prop.redirect} />
                            )} />
                        else
                            return <Route path={prop.path} component={prop.component} key={key} />
                    })}
                    <Route render={() => (<Redirect to={`${process.env.PUBLIC_URL}/404`} />)} />
                </Switch>
            </Router>
        )
    }
}

export default CustomRouter;