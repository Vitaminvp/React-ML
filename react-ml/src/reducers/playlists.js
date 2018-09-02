const initialState=[
    'playlist #1',
    'playlist #2',
    'playlist #3'
];

export default function playlists(state = initialState, action) {
    switch (action.type){
        case 'ADD_PLAYLIST':
            return [...state, action.payload];
        default : return state;
    }
}