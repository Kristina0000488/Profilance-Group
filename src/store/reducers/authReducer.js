const initialState = {
    user : {
        username: null,
        isStaff : false,
        isUser  : false
    }
}

const authReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.user };
        case 'LOGOUT':
            return { ...state, user: { } };
        default:
            return state;
    }
};

export default authReducer;