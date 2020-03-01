import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

import Approver from './approver';
import ClearIcon from '../../../../common/components/icons/clear';
import RoundedButton from '../../../../common/components/roundedButton';
import {noop} from '../../../../common/utils';

const modal = css`
    position: relative;
`;

const clear = css`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

const approversList = css`
    list-style: none;
    margin: 0;
    padding: 0;
`;

class SetUpApprovers extends Component {
    state = {
        approvers: this.props.approvers || [],
    };

    updateApprover = (id, value) => {
        this.setState(prevState => ({
            approvers: prevState.approvers.reduce((p, c) => [
                ...p,
                c.id === id ? {
                    ...c,
                    value,
                } : c,
            ], []),
        }));
    };

    removeApprover = (id) => {
        this.setState(prevState => ({
            approvers: prevState.approvers.filter(o => o.id !== id),
        }));
    };

    replaceApprover = (from_id, to_id) => {
        const {team} = this.props;

        const user = team.users.find(x => x.id === to_id);

        this.setState(prevState => ({
            approvers: prevState.approvers.reduce((p, c) => [
                ...p,
                c.id === from_id ? {
                    id: user.id,
                    value: c.value,
                } : c,
            ], []),
        }));
    };

    getApprover = (approver) => {
        const {team} = this.props;

        return {
            ...approver,
            ...team.users.find(x => x.id === approver.id),
        };
    };

    getAvailableApprovers = () => {
        const {team} = this.props;
        const {approvers} = this.state;

        return team.users.reduce((p, c) => [
            ...p,
            ...(!approvers.map(o => o.id).includes(c.id) ? [c] : []),
        ], []);
    };

    save = () => {
        const {team, closeModal, save} = this.props;
        const {approvers} = this.state;
        save(team, approvers);
        closeModal();
    };

    addThreshold = () => {
        const {approvers} = this.state;
        // set first available approver
        const available_approver = this.getAvailableApprovers()[0];
        const value = approvers.length ? approvers[approvers.length - 1].value + 1 : 0;

        this.setState(prevState => ({
            approvers: [
                ...prevState.approvers,
                {
                    ...available_approver,
                    value,
                },
            ],
        }));
    };

    render() {
        const {closeModal, team} = this.props;
        const {approvers} = this.state;

        return team
            ? (
                <div className={modal}>
                    <ClearIcon onClick={closeModal} className={clear}>close</ClearIcon>
                    <h1>Set up approvers</h1>
                    <p>
                        {`Who can approve requests of the team ${team.name}?`}
                    </p>

                    {!!approvers.length && (
                        <ul className={approversList}>
                            {approvers.map((approver, idx) => (
                                <Approver
                                    key={approver.id}
                                    approver={this.getApprover(approver)}
                                    availableApprovers={this.getAvailableApprovers()}
                                    updateApprover={this.updateApprover}
                                    removeApprover={this.removeApprover}
                                    replaceApprover={this.replaceApprover}
                                    iFirst={idx === 0}
                                    lastApproverValue={idx !== 0 ? approvers[idx - 1].value : null}
                                />
                            ))
                            }
                        </ul>
                    )}

                    {!!this.getAvailableApprovers().length && (
                        <RoundedButton onClick={this.addThreshold}>+Add a threshold</RoundedButton>
                    )}

                    <div>
                        <RoundedButton onClick={closeModal}>cancel</RoundedButton>
                        <RoundedButton onClick={this.save}>Save approval flow</RoundedButton>
                    </div>
                </div>
            )
            : null;
    }
}

SetUpApprovers.defaultProps = {
    team: null,
    approvers: null,
    closeModal: noop,
    save: noop,
};

SetUpApprovers.propTypes = {
    team: PropTypes.shape({}),
    approvers: PropTypes.arrayOf(PropTypes.shape({})),
    closeModal: PropTypes.func,
    save: PropTypes.func,
};

export default SetUpApprovers;
