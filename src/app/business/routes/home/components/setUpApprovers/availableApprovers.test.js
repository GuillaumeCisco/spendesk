import React from 'react';
import {shallow} from 'enzyme';
import AvailableApprovers from './availableApprovers';

test('Render correctly', () => {
    const props = {
        approvers: [
            {
                id: 'USR7',
                first_name: 'Andy',
                last_name: 'Bishop',
            },
        ],
    };

    const container = shallow(<AvailableApprovers {...props} />);
    expect(container.find('li')).toHaveLength(1);
    expect(container.find('li').first().html()).toContain('Andy Bishop');
    const spy = jest.spyOn(container.instance(), 'updateApprover');
    container.instance().forceUpdate();
    container.find('li div').simulate('click');
    expect(spy).toHaveBeenCalledWith('USR7');
    spy.mockClear();
});
