import React from 'react';
import {shallow} from 'enzyme';
import SetUpApprovers from './index';

const props = {
    team: {
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
            value: 1000,
        },
    ],
};

test('Render correctly', () => {
    const container = shallow(<SetUpApprovers {...props} />);

    expect(container.find('Button')).toHaveLength(3);
    const add_button = container.find('Button').at(0);
    expect(add_button.html()).toContain('+Add a threshold');

    add_button.simulate('click');
    container.instance().forceUpdate();
    expect(container.find('Button')).toHaveLength(2); // no more add_button displayed

});

test('Remove', () => {
    const mock = jest.fn();

    const container = shallow(<SetUpApprovers {...props} closeModal={mock} />);

    expect(mock).not.toHaveBeenCalled();
    container.find('ClearIcon').simulate('click');
    expect(mock).toHaveBeenCalled();
});

test('Cancel', () => {
    const mock = jest.fn();

    const container = shallow(<SetUpApprovers {...props} closeModal={mock} />);

    expect(container.find('Button')).toHaveLength(3);
    const cancel_button = container.find('Button').at(1);
    expect(cancel_button.html()).toContain('cancel');

    expect(mock).not.toHaveBeenCalled();
    cancel_button.simulate('click');
    expect(mock).toHaveBeenCalled();
});

test('Save', () => {
    const mockSave = jest.fn();
    const mockCloseModal = jest.fn();

    const container = shallow(<SetUpApprovers {...props} save={mockSave} closeModal={mockCloseModal} />);

    expect(container.find('Button')).toHaveLength(3);
    const save_button = container.find('Button').at(2);
    expect(save_button.html()).toContain('Save approval flow');

    expect(mockSave).not.toHaveBeenCalled();
    expect(mockCloseModal).not.toHaveBeenCalled();

    save_button.simulate('click');

    expect(mockSave).toHaveBeenCalledWith(props.team, props.approvers);
    expect(mockCloseModal).toHaveBeenCalled();
});
