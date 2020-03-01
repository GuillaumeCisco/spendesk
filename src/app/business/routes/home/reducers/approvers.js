const initialState = {
    results: {},
};

export default actionTypes => (state = initialState, {type, payload}) => {
    switch (type) {
    case actionTypes.approvers.SET:
        return {
            ...state,
            results: {
                ...state.results,
                [payload.team.name]: payload.approvers,
            },
        };

    default:
        return state;
    }
};
