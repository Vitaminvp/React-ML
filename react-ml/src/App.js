import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Form from './components/Form';
import Filter from './components/Filter';
import { getTracks } from  './AC/tracks';

class App extends Component {
  render() {
    return (
        <div>
            <Form state={ this.props.tracks } onAddTrack={ this.props.onAddTrack }/>
            <Filter  filterTrack={ this.props.filterTrack }/>
            <button onClick={this.props.onGetTrack}>Get tracks</button>
        </div>
    );
  }
}

export default connect(
    state =>({
        tracks: state.tracks.filter((track) => track.name.includes(state.filter))
    }),
    dispatch => ({
        filterTrack: (name) => {
            dispatch({
                type: 'SEARCH_TRACK',
                payload: name
            })
        },
        onAddTrack: (name)=>{
            const payload = {
                id: Date.now().toString(),
                name
            };
            dispatch({
                type: 'ADD_TRACK',
                payload
            })
        },
        onGetTrack: () => {
             dispatch(getTracks());
        }

    })
)(App);
