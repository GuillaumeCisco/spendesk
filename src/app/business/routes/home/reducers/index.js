import teams from './teams';
import users from './users';
import approvers from './approvers';
import {actionTypes} from '../actions';

export default {
    teams: teams(actionTypes),
    users: users(actionTypes),
    approvers: approvers(actionTypes),
};
