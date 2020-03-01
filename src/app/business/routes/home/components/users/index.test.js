import React from 'react';
import {shallow} from 'enzyme';
import Users from './index';

test('Render correctly', () => {
    const props = {
        users: [
            {
                id: 'USR1',
                first_name: 'Eugene',
                last_name: 'Tran',
                email: 'eugene.tran@spendesk.com',
            },
            {
                id: 'USR3',
                first_name: 'Tiffany',
                last_name: 'Frazier',
                email: 'tiffany.frazier@spendesk.com',
            },
        ],
    };

    const container = shallow(<Users {...props} />);
    expect(container.find('li')).toHaveLength(2);
    expect(container.find('li').first().html()).toContain('Eugene Tran');
});
