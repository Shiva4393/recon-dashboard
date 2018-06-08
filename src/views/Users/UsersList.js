import React, { Component } from 'react';

/* material ui */
import { List, ListItem, ListItemText } from '@material-ui/core';

class UsersList extends Component {
    handleClick = list => ev => {
        this.props.onClick(list);
    }
    render() {
        const { classes, listData } = this.props;
        return (
            <List>
                {listData.map((list, key) => {
                    return (
                        <ListItem key={key} onClick={this.handleClick(list)} button>
                            <ListItemText primary={list.role} />
                        </ListItem>
                    )
                })}
            </List>
        )
    }
}

export default UsersList;