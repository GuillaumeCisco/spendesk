import {call, put} from 'redux-saga/effects';

export const fetchListSaga = (actions, fetchListApi) => function* fetchList({payload}) {
    const [teams, users] = yield call(fetchListApi, payload);
    const {error: errorteams, status: statusteams, list: listteams} = teams;
    const {error: errorusers, status: statususers, list: listusers} = users;

    let list;

    if (errorteams || errorusers) {
        if (errorteams) {
            console.error(errorteams, statusteams);
            yield put(actions.list.failure(errorteams));
        }
        if (errorusers) {
            console.error(errorusers, statususers);
            yield put(actions.list.failure(errorusers));
        }
    }
    else {
        yield put(actions.users.success(listusers));
        yield put(actions.list.success(listteams));
    }

    return list;
};


export default {
    fetchListSaga,
};
