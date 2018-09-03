const initialState='';

export default function tracks(state = initialState, action) {
    switch (action.type){
        case 'SEARCH_TRACK':
            return action.payload;
        default : return state;
    }
}