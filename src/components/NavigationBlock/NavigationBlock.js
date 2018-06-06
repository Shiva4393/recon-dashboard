import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';

import navigationBlockStyle from '../../assets/jss/components/navigationBlockStyle';

class NavigationBlock extends Component {
    render() {
        const { classes, labelText, color, path } = this.props;
        return (
            <div className={classes.block}>
                <Link to={path} className={classes.a}>
                    <div className={classes.badge}
                        style={{
                            background: color
                        }}>
                        <Icon classes={{
                            root: classes.iconRoot
                        }}>move_to_inbox</Icon>
                    </div>

                    <p className={classes.labelText}>{labelText}</p>
                </Link>
            </div>
        )
    }
}

export default withStyles(navigationBlockStyle)(NavigationBlock);