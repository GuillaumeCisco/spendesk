import {connect} from 'react-redux';

import Top from './index';

const mapStateToProps = (state, ownProps) => ({
    location: state.location,
    ...ownProps,
});

export default connect(mapStateToProps)(Top);
