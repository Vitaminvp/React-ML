import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes ={
        store: PropTypes.arrayOf(
            PropTypes.string.isRequired
        )
    };
    addTrack = () => {
        this.props.onAddTrack(this.inputTreck.value);
        this.inputTreck.value = "";
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Название трека" ref={(input) => this.inputTreck = input}/>
                <button onClick={this.addTrack}>Добавить</button>
                <ul className="list">
                    {this.props.state.map((item, i) => <li key={i}>{ item.name }</li>)}
                </ul>
            </div>
        );
    }
}

export default Form;
