import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withStyles } from '@material-ui/core/styles';

/* React Routing */
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from '../src/routes/index';

/* Material UI */
import { 
  AppBar, Toolbar, Typography,
  Icon, IconButton,
  Menu, MenuItem,
  Badge 
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const hist = createBrowserHistory();

const styles = {
  flex: {
    flex: 1
  }
}

class App extends Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(this.state.anchorEl);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <div>
                <Badge className={classes.margin} badgeContent={4} color="default">
                  <Icon>notifications</Icon>
                </Badge>
                <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <Router history={hist}>
            <Switch>
              {indexRoutes.map((prop, key) => {
                if (prop.exact)
                  return <Route exact path={prop.path} component={prop.component} key={key}></Route>
                else
                  return <Route path={prop.path} component={prop.component} key={key}></Route>
              })}
            </Switch>
          </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
