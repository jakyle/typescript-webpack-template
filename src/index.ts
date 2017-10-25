import {deleteUser, getUsers} from './api/userApi';
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

    const deleteLinks = globalAny.document.getElementsByClassName('deleteUser');

    // Must use array.from to create a real array from a DOM collection
    // getElementByClassname only returns an "array Like" object
    Array.from<any, any>(deleteLinks, (link) => {
        link.onclick = (event: any) => {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes['data-id'].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });
});
