import React, { Component } from 'react';

/* material-ui */
import { withStyles } from '@material-ui/core';
import { 
    Tabs, Tab,
    FormControlLabel, RadioGroup, Radio,
    List, ListItem, ListItemText, ListItemSecondaryAction
} from '@material-ui/core';

/* Core Components */
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

/* JSON */
import SystemAccessJson from '../../json/SystemAccess.json';

const styles = theme => ({
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8'
    },
    tabRoot: {
        minWidth: "100px"
    }
})

function SystemAccess({ ...props }) {
    const { permission } = props;
    return (
        <div>
            <List>
                {SystemAccessJson.map((perm, key) => {
                    return (
                        <ListItem key={key}>
                            <ListItemText primary={perm.label} />
                            <ListItemSecondaryAction>
                                <RadioGroup aria-label={perm.label} name={perm.label}
                                    value={permission[perm.id]}
                                    onChange={(ev) => props.handleChange(ev, 'system_access', perm)}
                                    style={{display: 'block'}}>
                                    {perm.options.map((option, key) => {
                                        return <FormControlLabel key={key} value={option.id} control={<Radio color="primary" />} label={option.label} />
                                    })}
                                </RadioGroup>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

function JobAccess() {
    return (
        <div>Job Access</div>
    )
}

function Users() {
    return (
        <div>Users</div>
    )
}

class UserDetails extends Component {
    state = {
        value: 0
    }

    handleChange = (ev, val) => {
        this.setState({value: val});
    }
    handleChangePermission = (ev, prop, permission) => {
        let val = ev.target.value;
        this.props.handleChange(val, prop, permission)
        
    }
    render() {
        const { classes, selectedData, tabs } = this.props;
        return (
            <div>
                <h2>{selectedData.role}</h2>
                <Tabs value={this.state.value} onChange={this.handleChange}
                    classes={{root: classes.tabsRoot}}
                    indicatorColor="primary" textColor="primary">
                    {tabs.map((tab, i) => {
                        return <Tab key={i} label={tab.name} classes={{ root: classes.tabRoot }} />
                    })}
                </Tabs>
                <GridContainer justify="flex-start">
                    <GridItem xs={12} sm={9} md={10}>
                        {this.state.value === 0 && <SystemAccess
                            permission={selectedData.permissions.system_access} 
                            handleChange={this.handleChangePermission} />}
                        {this.state.value === 1 && <JobAccess />}
                        {this.state.value === 2 && <Users />}
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(styles)(UserDetails);