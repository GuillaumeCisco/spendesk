import React from 'react';
import PropTypes from 'prop-types';
import {NOT_FOUND} from 'redux-first-router';

/* Declare routes */
import NotFoundRoutes from './notFound/routes';
import Home from './home/routes';

const Route = ({page}) => {
    switch (page) {
        case 'HOME':
            return <Home />;
        case NOT_FOUND:
        default:
            return <NotFoundRoutes />;
    }
};

Route.propTypes = {
    page: PropTypes.string,
};

Route.defaultProps = {
    page: '',
};

export default Route;
