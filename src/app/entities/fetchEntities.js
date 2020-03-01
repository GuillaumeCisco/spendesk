/* global API_URL fetch */

import queryString from 'query-string';
import {isEmpty} from 'lodash';

export const handleResponse = (response) => {
    if (!response.ok) {
        return response.text().then(result => Promise.reject(new Error(result)));
    }

    return response.json();
};

export const fetchList = (url) => {
    let status;

    return fetch(url)
        .then((response) => {
            status = response.status;

            return handleResponse(response);
        })
        .then(json => ({list: json, status}), error => ({error, status}));
};

export const fetchByUrl = urlToFetch => fetchList(urlToFetch);

export const fetchEntitiesFactory = path => (get_parameters) => {
    const url = `${API_URL}/${path}${!isEmpty(get_parameters) ? `?${queryString.stringify(get_parameters)}` : ''}`;
    return fetchList(url);
};

export const fetchEntitiesByPathFactory = (path, view) => (get_parameters, id) => {
    const url = `${API_URL}/${path}/${id ? `${id}/` : ''}${view}/${!isEmpty(get_parameters)
        ? `?${queryString.stringify(get_parameters)}`
        : ''}`;
    return fetchList(url);
};

export const postEntityFactory = (path, view) => (payload, id) => {
    const url = `${API_URL}/${path}/${id ? `${id}/` : ''}${view}/`;

    let status;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
    })
        .then((response) => {
            status = response.status;
            if (status !== 200) {
                return response.text().then(result => Promise.reject(new Error(result)));
            }

            return response.json();
        })
        .then(json => ({res: json, status}), error => ({error, status}));
};

export const fetchRaw = (url) => {
    let status;

    return fetch(url, {
        mode: 'cors',
    })
        .then((response) => {
            status = response.status;
            if (!response.ok) {
                return response.text().then(result => Promise.reject(new Error(result)));
            }

            return response.text(); // /!\ Note the text, not json
        })
        .then(res => ({res, status}), error => ({error, status}));
};

export const fetchEntityFactory = path => (get_parameters, id) => {
    const url = `${API_URL}/${path}/${id}/${!isEmpty(get_parameters)
        ? `?${queryString.stringify(get_parameters)}`
        : ''}`;

    let status;

    return fetch(url)
        .then((response) => {
            status = response.status;
            return handleResponse(response);
        })
        .then(json => ({item: json, status}), error => ({error, status}));
};

export const deleteEntityFactory = path => (id) => {
    const url = `${API_URL}/${path}/${id}/`;

    let status;

    return fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            status = response.status;
            if (status !== 204) {
                return response.text().then(result => Promise.reject(new Error(result)));
            }

            return response;
        }).then(() => true, error => ({error, status}));
};

export const updateEntityFactory = path => (id, payload) => {
    const url = `${API_URL}/${path}/${id}/`;

    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(payload),
    })
        .then(response => handleResponse(response))
        .then(json => ({item: json}), error => ({error}));
};

export const updateFormEntityFactory = path => (id, payload) => {
    const headers = {};

    const url = `${API_URL}/${path}/${id}/`;

    return fetch(url, {
        method: 'PATCH',
        headers,
        // Allows API to set http-only cookies with AJAX calls
        // @see http://www.redotheweb.com/2015/11/09/api-security.html
        credentials: 'include',
        mode: 'cors',
        body: payload,
    })
        .then(response => handleResponse(response))
        .then(json => ({item: json}), error => ({error}));
};

export const createEntityFactory = path => (payload) => {
    const url = `${API_URL}/${path}/`;
    let status;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
    })
        .then((response) => {
            status = response.status;
            if (status !== 201) {
                return response.text().then(result => Promise.reject(new Error(result)));
            }

            return response.json();
        })
        .then(json => ({item: json, status}), error => ({error, status}));
};

export const createFormEntityFactory = path => (payload) => {
    const url = `${API_URL}/${path}/`;

    let status;

    return fetch(url, {
        method: 'POST',
        body: payload,
    })
        .then((response) => {
            status = response.status;
            if (status !== 201) {
                return response.text().then(result => Promise.reject(new Error(result)));
            }

            return response.json();
        })
        .then(json => ({item: json, status}), error => ({error, status}));
};
