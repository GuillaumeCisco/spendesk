import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {noop} from '../../../../common/utils';

const availableApproversCss = css`
    background-color: white;
    border: 1px solid grey;
    list-style: none;
    margin: 0;
    padding: 0;
    
    li {
        cursor: pointer;
        padding: 10px;
        &:hover {background: lightgrey;}
    }
`;

class AvailableApprovers extends Component {
    updateApprover = id => () => {
        const {updateApprover} = this.props;
        updateApprover(id);
    };

    render() {
        const {approvers} = this.props;

        return (
            <ul className={availableApproversCss}>
                {approvers.map(user => (
                    <li key={user.id}>
                        <div onClick={this.updateApprover(user.id)}>{`${user.first_name} ${user.last_name}`}</div>
                    </li>
                ))}
            </ul>
        );
    }
}

AvailableApprovers.defaultProps = {
    approvers: null,
    updateApprover: noop,
};

AvailableApprovers.propTypes = {
    approvers: PropTypes.arrayOf(PropTypes.shape({})),
    updateApprover: PropTypes.func,
};

export default AvailableApprovers;
