import {getUsers} from './api/userApi';
import './index.scss';
const globalAny: any = global;

// Populate table of users via API call.
getUsers().then((result: any) => {
    let usersBody: string = '';

    result.forEach((user: any) => {
        usersBody += `<tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
    });

    globalAny.document.getElementById('users').innerHTML = usersBody;
});
