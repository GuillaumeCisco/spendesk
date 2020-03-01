import {createDeepEqualSelector} from '../../../utils/selector';

const teamsResults = state => state.home.teams.results;
const usersResults = state => state.home.users.results;

const getTeams = createDeepEqualSelector([teamsResults, usersResults],
    (teams, users) => teams.reduce((p, c) => [
        ...p,
        {
            ...c,
            users: c.users.map(o => users.find(x => x.id === o)),
        },
    ], []),
);

export default getTeams;
