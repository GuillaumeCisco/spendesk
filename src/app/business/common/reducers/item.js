export const initialState = {
    init: false,
    loading: false,
    error: null,
    results: [],
};

export default actionTypes => (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.item.REQUEST:
            return {
                ...state,
                error: false,
                loading: true,
            };

        case actionTypes.item.SUCCESS:
            return {
                ...state,
                init: true,
                results: [...state.results, payload],
                error: false,
                loading: false,
            };

        case actionTypes.item.FAILURE:
            return {
                ...state,
                init: true,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};
