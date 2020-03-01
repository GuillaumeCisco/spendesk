import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import PulseLoader from 'react-spinners/PulseLoader';

import Teams from './teams';
import SetUpApprovers from './setUpApprovers';
import {noop} from '../../../common/utils';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

class Home extends Component {
    state = {
        opened: false,
        currentTeam: null,
    };

    componentDidMount(prevProps, prevState, snapshot) {
        const {
            teams: {loading}, fetchList,
        } = this.props;

        if (!loading) {
            fetchList();
        }
    }

    openModal = value => () => {
        this.setState({opened: true, currentTeam: value});
    };

    closeModal = () => {
        this.setState({opened: false, currentTeam: null});
    };

    save = (team, approvers) => {
        const {setApprovers} = this.props;
        setApprovers({team, approvers});
    };

    render() {
        const {teams: {results, loading}, approvers} = this.props;
        const {opened, currentTeam} = this.state;

        return (
            <>
                {!loading
                    ? (
                        <>
                            <Teams
                                teams={results}
                                openModal={this.openModal}
                                approvers={approvers}
                            />
                            <Modal
                                isOpen={opened}
                                onRequestClose={this.closeModal}
                                style={customStyles}
                                contentLabel="Set up approvers"
                            >
                                <SetUpApprovers
                                    team={currentTeam}
                                    approvers={approvers && currentTeam ? approvers[currentTeam.name] : []}
                                    closeModal={this.closeModal}
                                    save={this.save}
                                />
                            </Modal>
                        </>
                    )
                    : <PulseLoader size={6} />
                }
            </>
        );
    }
}


Home.defaultProps = {
    teams: null,
    approvers: null,
    fetchList: noop,
    setApprovers: null,
};

Home.propTypes = {
    teams: PropTypes.shape({}),
    approvers: PropTypes.shape({}),
    fetchList: PropTypes.func,
    setApprovers: PropTypes.func,
};

export default Home;
