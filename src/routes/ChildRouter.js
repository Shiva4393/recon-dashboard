import React, { Component } from 'react';
/* React Router Dom */
import { Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

class ChildRouter extends Component {
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
        const { routes, match } = this.props;
        return (
            <Switch>
                {routes.map((prop, key) => {
                    if (prop.exact)
                        return <Route exact path={`${process.env.PUBLIC_URL}${match.url}${prop.path}`} key={key} render={() => (
                            <Redirect to={`${process.env.PUBLIC_URL}${match.url}${prop.redirect}`} />
                        )} />
                    else
                        return <Route path={`${process.env.PUBLIC_URL}${match.url}${prop.path}`} component={prop.component} key={key} />
                })}
                <Route render={() => (<Redirect to={`${process.env.PUBLIC_URL}${match.url}`} />)} />
            </Switch>
        )
    }
}

export default ChildRouter;