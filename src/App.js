import React, { Component } from 'react';

import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';

/* React Routing */
import { createBrowserHistory } from "history";

import CustomRouter from './routes/CustomRouter';
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
  app: {},
  flex: {
    flex: 1
  },
  hideHeader: {
    display: "none"
  }
}

class App extends Component {
  state = {
    anchorEl: null,
    showHeader: true
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: null });
  }

  handleRouteChange = flag => {
    this.setState({ showHeader: flag })
  }
  
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const headerClass = classNames({
      [classes.hideHeader]: !this.state.showHeader
    })
    const open = Boolean(this.state.anchorEl);
    return (
      <div className={classes.app}>
          <AppBar position="static" className={headerClass}>
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
          <CustomRouter history={hist} routes={indexRoutes} 
            onRouteChange={(flag) => this.handleRouteChange(flag)}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
