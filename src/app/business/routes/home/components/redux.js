import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Home from './index';
import actions from '../actions';
import getTeams from '../selector';


const mapStateToProps = state => ({
    teams: {
        ...state.home.teams,
        results: getTeams(state),
    },
    approvers: state.home.approvers.results,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchList: actions.list.request,
    setApprovers: actions.approvers.set,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
