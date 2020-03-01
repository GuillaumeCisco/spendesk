import React from 'react';
import {shallow} from 'enzyme';
import Teams from './index';

test('Render correctly', () => {
    const props = {
        teams: [
            {
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
            {
                id: 'TEAM2',
                name: 'Product & Engineering',
                users: [
                    {
                        id: 'USR2',
                        first_name: 'Ralph',
                        last_name: 'Romero',
                        email: 'ralph.romero@spendesk.com',
                    },
                    {
                        id: 'USR3',
                        first_name: 'Tiffany',
                        last_name: 'Frazier',
                        email: 'tiffany.frazier@spendesk.com',
                    },
                    {
                        id: 'USR7',
                        first_name: 'Andy',
                        last_name: 'Bishop',
                        email: 'andy.bishop@spendesk.com',
                    },
                ],
            },
        ],
    };

    const container = shallow(<Teams {...props} />);
    expect(container.find('Team')).toHaveLength(2);
});
