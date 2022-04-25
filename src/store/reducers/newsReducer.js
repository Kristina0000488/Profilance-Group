
const initialState = {
    news: [
        {
            title: 'test',
            content: 'test 1',
            date: '01.01.2022',
            id: 0, 
            checked: true,
        }
    ],
}

const newsReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case 'GET_NEWS':
            return { ...state.news };

        case 'ADD_NEWS':
            return { 
                ...state, 
                news: [ ...state.news, { 
                    ...action.news, 
                    id: state.news.length, 
                    checked: false 
                } ] 
            };

        case 'REMOVE_NEWS':
            return { 
                ...state, 
                news: state.news.filter( item => item.id !== action.id ),
            };

        case 'CHECK_NEWS':
            const index    = state.news.findIndex( item => item.id === action.id );
            const newArray = [ ...state.news ]; 

            newArray[index].checked = true;

            return { ...state, news: newArray };
        default:
            return state;
    }
};

export default newsReducer;