import React, { Component } from 'react';

/* material ui */
import { List, ListItem, ListItemText } from '@material-ui/core';

/* core components */
import CustomSearch from '../../components/CustomSearch/CustomSearch';

class UsersList extends Component {
    handleClick = list => ev => {
        this.props.onClick(list);
    }
    onSearch = (val, cb) => {
        if(cb) cb();
    }
    onClear = () => {

    }
    render() {
        const { listData } = this.props;
        const disabled = false;
        return (
            <div>
                <CustomSearch 
                    disabled={disabled}
                    onSearch={(val, cb) => this.onSearch(val, cb)}
                    onClear={this.onClear} />
                <List>
                    {listData.map((list, key) => {
                        return (
                            <ListItem key={key} onClick={this.handleClick(list)} button>
                                <ListItemText primary={list.role} />
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default UsersList;