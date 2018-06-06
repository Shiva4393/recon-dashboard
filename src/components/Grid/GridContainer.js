import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
// material-ui components
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const style = {
    grid: {
        width: "auto"
    }
};

function GridContainer({ ...props }) {
    const { classes, children, className, ...rest } = props;
    const gridStyles = classNames({
        [classes.grid]: true,
        [className]: className !== undefined
    })
    return(
        <Grid container {...rest} className={gridStyles}>
            {children}
        </Grid>
    )
}

GridContainer.defaultProps = {
    className: ""
};

GridContainer.prototype = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
}

export default withStyles(style)(GridContainer);