import React, {Component} from 'react';
import universal from 'react-universal-component';
import {ReactReduxContext} from 'react-redux';

import PulseLoader from 'react-spinners/PulseLoader';

class UniversalContent extends Component {
    constructor(props) {
        super(props);
        this.firstRender = true;
    }

    render() {
        const U = universal(import('../../content/components/index'), {
            loading: <PulseLoader size={6} />,
            ignoreBabelRename: true,
        });
        if (this.firstRender) {
            this.firstRender = false;
            return (
                <ReactReduxContext.Consumer>
                    {reduxContext => <U reduxcontext={reduxContext} />}
                </ReactReduxContext.Consumer>
            );
        }

        return <U />;
    }
}

export default UniversalContent;
