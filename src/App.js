import React, { Component } from 'react';
/* material ui */
import { withStyles } from '@material-ui/core/styles';

import CustomRouter from './routes/CustomRouter';
import indexRoutes from '../src/routes/index';
import Header from './components/Header/Header';


const styles = theme => ({
  App: {},
  content: {
    position: 'relative',
    top: '46px',
    height: 'calc(100vh - 46px)',
    overflow: 'auto'
  }
})

class App extends Component {
  state = {
    showHeader: true,
    location: ''
  }

  handleRouteChange = location => {
    if (location.pathname.match('404'))
      this.setState({ showHeader: false });
    else 
      this.setState({ showHeader: true });

    this.setState({ location: location });
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.App}>
        <Header showHeader={this.state.showHeader} location={this.state.location}/>
        <div className={classes.content}>
          <CustomRouter routes={indexRoutes} 
            onRouteChange={(location) => this.handleRouteChange(location)} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
