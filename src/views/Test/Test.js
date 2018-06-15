import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* material ui core */
import { 
    List, ListItem, ListItemText,
    Collapse
} from '@material-ui/core';
/* material ui icons */
import { ExpandLess, ExpandMore } from '@material-ui/icons';

/* core components */
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
// import CustomTable from '../../components/CustomTable/CustomTable';

import ChildRouter from '../../routes/ChildRouter';
import TestRoutes from '../../routes/TestRoutes';

class Test extends Component {
    state = {
        open: false,
        listItems : [
            { label: 'Upload', children: [], path: '/upload' },
            { label: 'InfiniteScroll', children: [], path: '/infinite-scroll' },
            { label: 'Data Table', isOpen: false, children: [
                    { label: 'React Table', path: '/react-table' },
                    { label: 'React Data Grid', path: '/react-data-table' },
                    { label: 'Handson Table', path: '/handson-table' }
            ], path: '/react-table' },
            { label: 'Drag n Drop', children: [], path: '/DND' }
        ]
    }
    handleRouteChange = location => {
        console.log(location);
    }
    onDrop = files => {
        console.log(files);
    }
    handleClick = index => ev => {
        let updatedList = [
            ...this.state.listItems
        ]
        let updatedRow = {
            ...updatedList[index]
        }
        if (updatedRow.children.length){
            updatedRow.isOpen = !updatedRow.isOpen;
            updatedList[index] = updatedRow;
            
            this.setState({
                listItems: updatedList
            })
        }
    }
    render() {
        const { match } = this.props;
        const { listItems } = this.state;
        return (<GridContainer justify="flex-start">
                    <GridItem xs={6} sm={2} md={3}>
                        <List>
                            {listItems.map((item, i) => {
                                return (<React.Fragment key={i}>   
                                            <ListItem component={Link} to={`${match.url}${item.path}`} button onClick={this.handleClick(i)}>
                                                <ListItemText primary={item.label} />
                                                {item.children.length
                                                    ? item.isOpen ? <ExpandLess /> : <ExpandMore /> 
                                                    : null
                                                }
                                            </ListItem>
                                            {item.children
                                                ? (<Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                                                        <List component="div" disablePadding>
                                                            {item.children.map((subItem, j) => {
                                                                return (<ListItem button component={Link} to={`${match.url}${subItem.path}`} key={j}>
                                                                            <ListItemText inset primary={subItem.label} />
                                                                        </ListItem>)
                                                            })}
                                                        </List>
                                                    </Collapse>)
                                            : null
                                        }
                                    </React.Fragment>)
                            })}
                            
                        </List>
                    </GridItem>
                    <GridItem xs={6} sm={8} md={9}>
                        <ChildRouter routes={TestRoutes} match={match}
                            onRouteChange={(location) => this.handleRouteChange(location)} />
                    </GridItem>
                </GridContainer>)
    }
}

export default Test;