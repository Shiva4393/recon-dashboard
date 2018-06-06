import React, { Component } from 'react';

/* material-ui */
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Modal, Toolbar, Typography } from '@material-ui/core';

import ModalFooter  from '../components/Dialog/ModalFooter';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        '&:focus': {
            outline: 'none'
        }
    },
    modalBody: {
        padding: theme.spacing.unit * 4,
    }
})

class AddNewTask extends Component {
    submitModal = ev => {
        console.log(ev);
        this.props.closeModal();
    }

    render() {
        const { classes, open } = this.props;
        return (
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                open={open}
                onClose={this.props.closeModal}>
                <div style={getModalStyle()} className={classes.paper}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit" id="modal-title">
                                Add New Task
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.modalBody} id="modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </div>
                    <ModalFooter
                        buttonProps={{
                            cancel: {labelText: 'Cancel'},
                            submit: {labelText: 'Save'}
                        }}
                        cancelModal={this.props.closeModal}
                        submitModal={this.submitModal}
                    />
                </div>
            </Modal>
        )
    }

}

export default withStyles(styles)(AddNewTask);