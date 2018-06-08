import React, { Component } from 'react';
// import axios from 'axios';

/* Core Components */
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import UsersList from '../Users/UsersList';
import UserDetails from '../Users/UserDetails';

/* JSON */
import roles from '../../json/userRole.json';

class Users extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            roles: roles,
            selectedRole: {}
        }
    }
    
    componentWillMount() {
        this.getSelection(this.state.roles[0]);
    }

    getSelection = (role) => {
        // axios.get('getUserTypesAndCompanies')
        // .then((res) => console.log(res))
        role.permissions = {
            system_acces: {1: "11", 2: "22", 3: "32", 4: "41", 5: "51", 6: "62", 7: "72", 8: "81", 9: "92", 10: "101", 11: "112", 12: "122"}
        }
        this.setState({ selectedRole: role });
    }

    render() {
        const tabs = [{id: 1, name: "System Access"}, {id: 2, name: "Job Access"}, {id: 3, name: "Users"}];
        return (
            <div>
                <GridContainer justify="flex-start">
                    <GridItem xs={6} sm={4} md={3}>
                        <UsersList listData={this.state.roles} 
                            onClick={this.getSelection}/>
                    </GridItem>
                    <GridItem xs={6} sm={8} md={9}>
                        <UserDetails selectedData={this.state.selectedRole} 
                        tabs={tabs}/>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default Users;