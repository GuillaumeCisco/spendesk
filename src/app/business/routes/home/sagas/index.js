import {
    takeLatest, all, select, call,
} from 'redux-saga/effects';

import {
    fetchListSaga,
} from '../../../common/sagas';

import actions, {actionTypes} from '../actions';
import {fetchListApi} from '../api';

function* fetchList(request) {
    const state = yield select();

    const f = () => fetchListApi(state.location.query);
    yield call(fetchListSaga(actions, f), request);
}

const sagas = function* sagas() {
    yield all([
        takeLatest(actionTypes.list.REQUEST, fetchList),
    ]);
};


export default sagas;
