import React, { Component } from 'react';

import { Link, Route, Redirect, Switch } from "react-router-dom";

class Test extends Component {
    handleRouteChange = location => {
        console.log(location);
    }
    render() {
        const { match } = this.props;
        const routes = ['home', 'about', 'contact'];
        return (
            <div>
                <ul>
                    <li><Link to={`${match.url}/home`}>Home</Link></li>
                    <li><Link to={`${match.url}/about`}>About</Link></li>
                    <li><Link to={`${match.url}/contact`}>Contact</Link></li>
                </ul>

                <Switch>
                    <Route exact path={`${match.url}/`} render={() => (
                        <Redirect to={`${process.env.PUBLIC_URL}${match.url}/home`} />
                    )}></Route>
                    {routes.map((path, ind) => {
                        return <Route path={`${match.url}/${path}`} render={() => <h2>{path}</h2>} key={ind}></Route>
                    })}
                    <Route render={() => (<Redirect to={`${process.env.PUBLIC_URL}/test`} />)}></Route>
                </Switch>
            </div>
        )
    }
}

export default Test;