const initialState = {
    results: [],
};

export default actionTypes => (state = initialState, {type, payload}) => {
    switch (type) {
    case actionTypes.users.SUCCESS:
        return {
            ...state,
            results: payload,
        };
    default:
        return state;
    }
};
