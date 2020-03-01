import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';

import Root from './root';
import store from './store';
import GlobalStyles from '../common/globalStyles';

const App = () => (
    <Fragment>
        <GlobalStyles />
        <Root store={store} />
    </Fragment>
);

export default hot(module)(App);
