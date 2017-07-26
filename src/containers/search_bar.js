import React, {  Component } from 'react';

export default class SearchBar extends Component {
    render(){
        return (
            <section id="search">
                <form className="input-group" action="submit">
                    <input type="text"/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </section>
        )
    }
}