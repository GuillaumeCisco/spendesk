import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {css} from 'emotion';
import Link from 'redux-first-router-link';

import {white, ice, slate} from '../../../../assets/css/variables/colors';
import {spacingLarge, spacingNormal} from '../../../../assets/css/variables/spacing';

const Wrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${white};
    padding: ${spacingLarge};
    height: 80px;
    border-bottom: 1px solid ${ice};
    margin-bottom: ${spacingNormal};
`;


const link = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${slate};
    font-weight: normal;
`;

const Top = ({location}) => (
    <Wrapper>
        <Link to={{type: 'HOME', meta: {query: location.query}}} className={link}>
            <h1>Spendesk</h1>
        </Link>
    </Wrapper>
);

Top.defaultProps = {
    location: {},
};

Top.propTypes = {
    location: PropTypes.shape({}),
};

export default Top;
