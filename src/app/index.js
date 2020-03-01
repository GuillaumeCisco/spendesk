import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import Modal from 'react-modal';

import ServiceWorker from './business/common/components/serviceWorker';
import Content from './business/content/routes';

const Container = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

Modal.setAppElement('#modal');

const Routes = ({page}) => (
    <Container>
        <ServiceWorker />
        <Content />
    </Container>
);

Routes.propTypes = {
    page: PropTypes.string.isRequired,
};

const mapStateToProps = ({location}) => ({page: location.type});

export default connect(mapStateToProps)(Routes);
