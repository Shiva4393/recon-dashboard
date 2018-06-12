import React, { Component } from 'react';

import { 
    Input, InputAdornment,
    Icon, CircularProgress 
} from '@material-ui/core';

class CustomSearch extends Component {
    constructor() {
        super()
        this.state = {
            delay: 1000,
            value: '',
            progress: false,
            complete: false
        }
        this.timer = '';
    }

    reset = () => {
        this.setState({
            value: '',
            progress: false,
            complete: false
        })
    }

    handleChange = ev => {
        let val = ev.target.value;
        this.setState({value: val});
        if(this.state.value === ''){
            if(this.timer)
                clearTimeout(this.timer);
            this.props.onClear();
        }else {
            this.setState({progress: true});
            if(this.timer) clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.props.onSearch(this.state.value, () => {
                    this.setState({ progress: false, complete: true })
                });
            }, this.state.delay);
        }
    }

    handleClear = () => {
        if(!this.props.disabled){
            this.setState({ value: '' });
            this.reset();
            this.props.onClear();
        }
    }

    render () {
        return (
            <div>
                <Input
                    onChange={this.handleChange}
                    value={this.state.value}
                    placeholder="Search"
                    // className={classes.input}
                    disabled={this.props.disabled}
                    inputProps={{
                        'aria-label': 'Search',
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <Icon>search</Icon>
                        </InputAdornment>
                    }
                    endAdornment={
                        this.state.progress || this.state.complete
                        ? (<InputAdornment position="end">
                            {this.state.progress 
                                ? <CircularProgress color="primary" />
                                : <Icon onClick={this.handleClear}>clear</Icon>
                            }
                            </InputAdornment>)
                        : null
                    }
                />
            </div>
        )
    }
}

export default CustomSearch;