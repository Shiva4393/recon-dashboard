import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* material-ui */
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
/* components */
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    left: {
        textAlign: "right"
    }
})

class Modalfooter extends Component {
    render() {
        const { classes, buttonProps } = this.props;
        return(
            <GridContainer justify="center" className={classes.left}>
                <GridItem>
                    {buttonProps.cancel
                        ? <Button variant="contained" className={classes.button} onClick={this.props.cancelModal}>{buttonProps.cancel.labelText}</Button>
                        : null
                    }
                    {buttonProps.submit
                        ? <Button variant="contained" color="secondary" className={classes.button} onClick={this.props.submitModal}>{buttonProps.submit.labelText}</Button>
                        : null
                    }
                </GridItem>
            </GridContainer>
        )
    }
}

Modalfooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Modalfooter);