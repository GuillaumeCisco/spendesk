const DEFAULT = 'Spendesk';

export default (state = DEFAULT, action = {}) => {
    switch (action.type) {
        case 'HOME':
            return `Home - ${DEFAULT}`;
        default:
            return state;
    }
};
