import {createAction} from 'redux-actions';
import createRequestActionTypes from '../../../actions/createRequestActionTypes';

const prefix = 'SPENDESK__HOME';

export const actionTypes = {
    list: createRequestActionTypes(`${prefix}_TEAMS`),
    users: {
        SUCCESS: `${prefix}_SUCCESS_ USERS`,
    },
    approvers: {
        SET: `${prefix}_SET_APPROVERS`,
    },
};

export default {
    list: {
        request: createAction(actionTypes.list.REQUEST),
        success: createAction(actionTypes.list.SUCCESS),
        failure: createAction(actionTypes.list.FAILURE),
    },
    users: {
        success: createAction(actionTypes.users.SUCCESS),
    },
    approvers: {
        set: createAction(actionTypes.approvers.SET),
    },
};
