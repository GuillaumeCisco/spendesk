import React from 'react';
import {shallow} from 'enzyme';
import Home from './index';

test('Render correctly on loading', () => {
    const props = {
        teams: {
            loading: true,
        },
    };

    const container = shallow(<Home {...props} />);
    expect(container.find('Fragment').exists()).toBeTruthy();
});

test('Render correctly after loading', () => {
    const props = {
        teams: {
            loading: false,
            results: [],
        },
    };

    const container = shallow(<Home {...props} />);

    expect(container.find('PulseLoader').exists()).toBeFalsy();
    expect(container.find('Teams').exists()).toBeTruthy();
    expect(container.find('Modal').exists()).toBeTruthy();

    const modal = container.find('Modal');
    expect(modal.prop('isOpen')).toBe(false);
});
