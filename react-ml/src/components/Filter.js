import React, { Component } from 'react';

class Filter extends Component {
    filterTrack = () => {
        this.props.filterTrack(this.inputSearch.value);
        this.inputSearch.value = "";
    };
    render() {
        return (
            <div>
                <input type="text" placeholder="Название трека ..." ref={(input) => this.inputSearch = input}/>
                <button onClick={this.filterTrack}>Найти</button>
            </div>
        );
    }
}
export default Filter;
