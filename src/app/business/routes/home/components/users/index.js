import React from 'react';
import PropTypes from 'prop-types';

const Users = ({users}) => (
    <ul>
        {users.map(user => (
            <li key={user.id}>
                {`${user.first_name} ${user.last_name}`}
            </li>
        ))}
    </ul>
);

Users.defaultProps = {
    users: null,
};

Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Users;
