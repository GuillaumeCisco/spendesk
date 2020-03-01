import {fork} from 'redux-saga/effects';

import homeSagas from './business/routes/home/sagas';

/* istanbul ignore next */
export default function* () {
    yield fork(homeSagas);
}
