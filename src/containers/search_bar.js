import React, {  Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this)
    }

    render(){
        return (
            <section id="search">
                <form className="input-group">
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
        super.setState({term:event.target.value})
    }
}