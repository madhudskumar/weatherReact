import React, {  Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import { fetchWeather } from "../actions/index"

export class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render(){
        return (
            <section id="search">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input type="text"
                           className="form-control"
                           value={this.state.term}
                           onChange={this.onSearchChange}
                           placeholder="search city"/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </section>
        )
    }

    onSearchChange(event){
        this.setState({term:event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);