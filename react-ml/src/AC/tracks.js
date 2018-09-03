const mockApiData = [
    {
        id: '001',
        name: 'Track #1'
    },
    {
        id: '002',
        name: 'Track #2'
    },
    {
        id: '003',
        name: 'Track #3'
    },
    {
        id: '004',
        name: 'Track #4'
    }
];

export const getTracks = () => dispatch => {
        setTimeout(() => {
            console.log('Got trucks');
            dispatch({type: 'FETCH_TRACKS_SUCCESS', payload : mockApiData});
        }, 2000);
};
