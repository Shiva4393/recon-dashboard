import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* material-ui */
import { withStyles } from '@material-ui/core/styles';
/* core components */
import CustomSearch from '../../components/CustomSearch/CustomSearch';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

import adminStyle from '../../assets/jss/views/adminStyle';

import { Admin as adminJson } from '../../json/lang';

class Admin extends Component {
    onSearch = (val, cb) => {
        if(cb) cb();
    }
    onClear = () => {

    }
    render () {
        const { classes, match } = this.props;
        const { disabled } = false;
        return (
            <div className={classes.container}>
                <CustomSearch
                    fullWidth
                    disabled={disabled}
                    onSearch={(val, cb) => this.onSearch(val, cb)}
                    onClear={this.onClear} />

                <GridContainer justify="center">
                    {adminJson.list.map((admin, i) => {
                        return (
                            <GridItem item xs={12} key={i}>
                                <h1>{admin.label}</h1>
                                {admin.catagories.length
                                    ? (<GridContainer justify="flex-start">
                                        {admin.catagories.map((catg, j) => {
                                            return (
                                                <GridItem item xs={3} key={j}>
                                                    {catg.link
                                                        ? <Link to={`${match.url}/${catg.link}`}>{catg.label}</Link>
                                                        : catg.label
                                                    }
                                                </GridItem>
                                            )
                                        })}
                                    </GridContainer>)
                                : null}
                            </GridItem>
                        )
                    })}
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(adminStyle)(Admin);