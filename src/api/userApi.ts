import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(): any {
    return get('users');
}

export function deleteUser(id: any) {
    return del(`users/${id}`);
}

function get(url: any) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url: any) {
    const request = new Request(baseUrl + url, {
        method: 'DELETE',
    });

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response: any) {
    return response.json();
}

function onError(error: any) {
    console.log(error);
}
