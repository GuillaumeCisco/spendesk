import React from 'react';
import {shallow} from 'enzyme';
import Approver from './approver';

test('Render correctly', () => {
    const props = {
        approver: {
            id: 'USR1',
            value: 200,
        },
        idx: 1,
        lastApprover: {
            id: 'USR3',
            value: 1000,
        },
        availableApprovers: [
            {
                id: 'USR7',
            },
        ],
    };

    let spy;

    const container = shallow(<Approver {...props} />);
    expect(container.find('AvailableApprovers').exists()).toBeFalsy();
    expect(container.find('li div span').first().html()).toContain('From 1000 to');
    spy = jest.spyOn(container.instance(), 'onChange');
    container.instance().forceUpdate();
    container.find('input').simulate('change', {name: 'value', target: {value: '2000'}});
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
    expect(container.state('value')).toEqual('2000');

    spy = jest.spyOn(container.instance(), 'openPopover');
    container.instance().forceUpdate();
    const userName = container.find('li div span').at(1);
    userName.simulate('click'); // simulate a click on username
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
    expect(container.find('AvailableApprovers').exists()).toBeTruthy();
});

test('Remove has been called', () => {
    const props = {
        approver: {
            id: 'USR1',
            value: 200,
        },
    };

    const container = shallow(<Approver {...props} />);
    const spy = jest.spyOn(container.instance(), 'remove');
    container.instance().forceUpdate();
    container.find('ClearIcon').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
});
