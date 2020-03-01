import {fetchEntitiesFactory} from '../../../entities/fetchEntities';

export const fetchTeamsApi = fetchEntitiesFactory('teams');
export const fetchUserstApi = fetchEntitiesFactory('users');

export function fetchListApi(...args) {
    const promises = [
        fetchTeamsApi(...args),
        fetchUserstApi(...args),
    ];
    return Promise.all(promises);
}

export default {
    fetchListApi,
};
