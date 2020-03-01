import React from 'react';
import {shallow} from 'enzyme';
import Team from './team';

test('Render correctly', () => {
    const props = {
        item: {
            id: 'TEAM1',
            name: 'Marketing',
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
        },
    };

    const container = shallow(<Team {...props} />);
    expect(container.html()).toContain('First 3 Users');
    expect(container.html()).not.toContain('First 3 Approvers');
});

test('Render correctly with approvers', () => {
    const props = {
        item: {
            id: 'TEAM1',
            name: 'Marketing',
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
        },
        approvers: [
            {
                id: 'USR1',
                value: 200,
            },
        ],
    };

    const container = shallow(<Team {...props} />);
    expect(container.html()).toContain('First 3 Approvers');
});
