import {reducer as formReducer} from 'redux-form';

import {actionTypes} from './actions';
import title from './business/routes/reducers/title';
import home from './business/routes/home/reducers';


const initialState = {
    error: '',
};

export const general = (state = initialState, {type, payload}) => {
    switch (type) {
    case actionTypes.error.SET:
        return {
            ...state,
            error: payload,
        };
    default:
        return state;
    }
};

export default {
    form: formReducer,
    home,
    general,
    title,
};
