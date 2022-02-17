import { checkAuth, logout, fetchItems } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const items = await fetchItems();
    console.log(items);
});