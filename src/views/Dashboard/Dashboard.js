import React, { Component } from 'react';

/* material-ui */
import { withStyles } from '@material-ui/core/styles';
/* components */
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import NavigationBlock from '../../components/NavigationBlock/NavigationBlock';

/* Dialogs */
import AddNewTask from '../../dialogs/AddNewTask';


import dashboardStyle from '../../assets/jss/views/dashboardStyle';

class Dashboard extends Component {
    state = {
        navigations: [
            { key: 'messages', labelText: 'Messages', color: '#974bb2', path: '/messages', badgeProps: {} },
            { key: 'projects', labelText: 'Projects', color: '#827ff3', path: '/projects', badgeProps: {} },
            { key: 'task', labelText: 'Tasks', color: '#b1835a', path: '/tasks', badgeProps: {} },
            { key: 'track_time', labelText: 'Track Time', color: '#ef54ba', path: '/track-time', badgeProps: {} },
            { key: 'budget_planner', labelText: 'Budget Planner', color: '#2dc3a6', path: '/budget-planner', badgeProps: {} },
            { key: 'campaigns', labelText: 'campaigns', color: '#e4572e', path: '/campaigns', badgeProps: {} },
            { key: 'prepress', labelText: 'Prepress', color: '#827ff3', path: '/prepress', badgeProps: {} },
            { key: 'resource_planner', labelText: 'Resource Planner', color: '#e4572e', path: '/resource-planner', badgeProps: {} },
            { key: 'reports', labelText: 'Reports', color: '#ef54ba', path: '/reports', badgeProps: {} },
            { key: 'estimates', labelText: 'Estimates', color: '#827ff3', path: '/estimates', badgeProps: {} },
            { key: 'purchase_orders', labelText: 'Purchase Orders', color: '#2dc3a6', path: '/purchase-orders', badgeProps: {} },
            { key: 'invoices', labelText: 'Invoices', color: '#f2a62d', path: '/invoices', badgeProps: {} },
            { key: 'contacts', labelText: 'Contacts', color: '#899697', path: '/contacts', badgeProps: {} },
            { key: 'files', labelText: 'Files', color: '#b1835a', path: '/files', badgeProps: {} },
            { key: 'flyer_page_count', labelText: 'Flyer Page Count', color: '#2dc3a6', path: '/flyer-page-count', badgeProps: {} },
            { key: 'users', labelText: 'Users', color: '#974bb2', path: '/users', badgeProps: {} },
            { key: 'admin', labelText: 'Admin', color: '#899697', path: '/admin', badgeProps: {} },
        ],
        open: true
    }

    closeModal = ev => {
        this.setState({open: false})
    }
    render() {
        const { classes } = this.props;
        return (
            <GridContainer justify="center">
                {this.state.navigations.map((nav) => {
                    return (
                        <GridItem xs={6} sm={4} md={1} key={nav.key} className={classes.gridPadding}>
                            <NavigationBlock
                                color={nav.color}
                                path={nav.path}
                                labelText={nav.labelText} 
                                badgeProps={nav.badgeProps}
                            />
                        </GridItem>                            
                    )
                })}

                <AddNewTask open={this.state.open} closeModal={this.closeModal} />

                
            </GridContainer>
            // <div className={classes.conatinerFluid}>
            //     {this.state.navigations.map((nav) => {
            //         return <NavigationBlock
            //                     // className={classes.}
            //                     key={nav.key}
            //                     labelText={nav.labelText} 
            //                     badgeProps={nav.badgeProps}
            //                 />
            //     })}
            // </div>
        )
    }
}

export default withStyles(dashboardStyle)(Dashboard);