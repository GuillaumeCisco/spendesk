import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';

import AvailableApprovers from './availableApprovers';
import ClearIcon from '../../../../common/components/icons/clear';
import {noop} from '../../../../common/utils';

const approverCss = css`
    border: 1px solid #e2e2ea;
    border-radis: 8px;
    margin: 10px 0;
`;

const valueCss = css`
    display: block;
    background: #fafafc;
    padding: 10px;
    position: relative;
`;

const user = css`
    border-top: 1px solid #e2e2ea;
    display: block;
    padding: 10px;
    cursor: pointer;
    &:hover {background-color: lightgrey}
`;

const clear = css`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`;

class Approver extends Component {
    state = {
        value: this.props.approver.value || 0,
        isPopoverOpen: false,
    };

    openPopover = () => {
        this.setState({isPopoverOpen: true});
    };

    updateApprover = (id) => {
        const {approver, replaceApprover} = this.props;
        this.setState({isPopoverOpen: false});
        replaceApprover(approver.id, id);
    };

    onChange = (e) => {
        const {approver, updateApprover} = this.props;

        this.setState({value: e.target.value});
        updateApprover(approver.id, parseInt(e.target.value, 10));
    };

    remove = () => {
        const {approver, removeApprover} = this.props;
        removeApprover(approver.id);
    };

    render() {
        const {
            approver, iFirst, lastApproverValue, availableApprovers,
        } = this.props;
        const {value, isPopoverOpen} = this.state;

        return (
            <li className={approverCss}>
                <div className={valueCss}>
                    <span>{iFirst ? 'Up to ' : `From ${lastApproverValue} to `}</span>
                    <input name="value" type="number" value={value} onChange={this.onChange} />
                    <ClearIcon onClick={this.remove} className={clear} />
                </div>
                <div>
                    {!isPopoverOpen
                        ? (
                            <span
                                onClick={this.openPopover}
                                className={user}
                            >
                                {`${approver.first_name} ${approver.last_name}`}
                            </span>
                        )
                        : (
                            <AvailableApprovers
                                approvers={[approver].concat(availableApprovers)}
                                updateApprover={this.updateApprover}
                            />
                        )
                    }
                </div>
            </li>
        );
    }
}

Approver.defaultProps = {
    approver: null,
    iFirst: true,
    lastApproverValue: null,
    availableApprovers: [],
    updateApprover: noop,
    removeApprover: noop,
    replaceApprover: noop,
};

Approver.propTypes = {
    approver: PropTypes.shape({
        value: PropTypes.number,
    }),
    iFirst: PropTypes.bool,
    lastApproverValue: PropTypes.number,
    availableApprovers: PropTypes.arrayOf(PropTypes.shape({})),
    updateApprover: PropTypes.func,
    removeApprover: PropTypes.func,
    replaceApprover: PropTypes.func,
};

export default Approver;
