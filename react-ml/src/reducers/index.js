import { combineReducers }  from 'redux';
import tracks from './tracks';
import playlists from './playlists';
import filter from './filter';

export default combineReducers({
    tracks,
    playlists,
    filter
})