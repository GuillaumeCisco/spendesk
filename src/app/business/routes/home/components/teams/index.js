import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

import Team from './team';
import {noop} from '../../../../common/utils';

const teamsCss = css`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Teams = ({teams, approvers, openModal}) => (
    <ul className={teamsCss}>
        {teams.map(team => (
            <Team
                key={team.name}
                item={team}
                openModal={openModal(team)}
                approvers={approvers ? approvers[team.name] : []}
            />
        ))}
    </ul>
);

Teams.defaultProps = {
    teams: null,
    approvers: null,
    openModal: noop,
};

Teams.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.shape({})),
    approvers: PropTypes.shape({}),
    openModal: PropTypes.func,
};

export default Teams;
