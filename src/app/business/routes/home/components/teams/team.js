import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

import Users from '../users';

const teamCss = css`
    margin: 10px 0;
`;

const teamName = css`
    cursor: pointer;
    font-weight: bold;
    font-size: 22px;
`;

const Team = ({item, openModal, approvers}) => (
    <li key={item.name} className={teamCss}>
        <span onClick={openModal} className={teamName}>{item.name}</span>
        <div>
            <h3>First 3 Users:</h3>
            <Users users={item.users.slice(0, 3)} />
        </div>
        {!!approvers.length && (
            <div>
                <h3>First 3 Approvers:</h3>
                <Users users={approvers.slice(0, 3).map(o => item.users.find(x => x.id === o.id))} />
            </div>
        )}
    </li>
);

Team.defaultProps = {
    item: null,
    openModal: null,
    approvers: [],
};

Team.propTypes = {
    item: PropTypes.shape({}),
    openModal: PropTypes.func,
    approvers: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Team;
