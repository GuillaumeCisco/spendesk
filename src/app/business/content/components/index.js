import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Top from '../../top/redux';
import Route from '../../routes';
import withInjectedReducers from '../../common/components/withInjectedReducers';

const Content = ({page}) => (
    <Fragment>
        <Top />
        <Route page={page} />
    </Fragment>
);


Content.propTypes = {
    page: PropTypes.string.isRequired,
};

const mapStateToProps = ({location}) => ({page: location.type});

export default withInjectedReducers(connect(mapStateToProps)(Content));
