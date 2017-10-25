import 'whatwg-fetch';

export function getUsers(): any {
    return get('users');
}

function get(url: any) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response: any) {
    return response.json();
}

function onError(error: any) {
    // tslint:disable-next-line:no-console
    console.log(error);
}
