import React, { Component } from 'react';
import classNames from "classnames";
/* Material UI */
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar, Toolbar, Typography,
    Icon, IconButton,
    Menu, MenuItem,
    Badge,
    Drawer
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

import { header } from '../../json/lang';

const styles = theme => ({
    flex: {
        flex: 1
    },
    hideHeader: {
        display: "none"
    },
    toolbarRoot: {
        minHeight: '46px'
    }
})

class Header extends Component {
    state = {
        right: false,
        anchorEl: null,
        selectedNav: {}
    }
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = event => {
        this.setState({ anchorEl: null });
    };
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    }

    handleRouteChange = location => {
        console.log(location);
    }

    componentWillReceiveProps = updatedProps => {
        var prop = updatedProps.location.pathname.split('/');
        this.setState({ selectedNav: header[prop[1]] })

    }

    render() {
        const { classes, showHeader } = this.props;
        const { anchorEl } = this.state;
        const headerClass = classNames({
            [classes.hideHeader]: !showHeader
        })
        const open = Boolean(this.state.anchorEl);
        const sideList = (
            <div className={classes.list}>
                shiva
            </div>
        );
        return (
            <AppBar position="fixed" className={headerClass}>
                <Toolbar classes={{
                    root: classes.toolbarRoot
                }}>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {this.state.selectedNav
                            ? (<div>
                                    <Icon>{this.state.selectedNav.icon}</Icon>
                                    <span>{this.state.selectedNav.label}</span>
                                </div>)
                            : 'Title'
                        }
                    </Typography>
                    <div>
                        <span onClick={this.toggleDrawer('right', true)}>
                            <Icon>add</Icon> Create
                        </span>
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
                        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer('right', false)}
                                onKeyDown={this.toggleDrawer('right', false)}
                            >
                                {sideList}
                            </div>
                        </Drawer>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);