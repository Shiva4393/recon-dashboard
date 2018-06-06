import React from 'react';
import classNames from "classnames";
import { withStyles, Grid } from '@material-ui/core';

const style = {
    grid: {
        position: 'relative',
        width: '100%',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '15px',
        flexBasis: 'auto'
    }
}

function GridItem({ ...props }) {
    const { classes, children, className, ...rest } = props;
    const gridItemClasses = classNames({
        [classes.grid]: true,
        [className]: className !== undefined
    })
    return (
        <Grid item {...rest} className={gridItemClasses}>
            {children}
        </Grid>
    );
}

export default withStyles(style)(GridItem);