import { checkAuth, logout, fetchItems } from '../fetch-utils.js';
import { renderItem } from '../utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listEl = document.getElementById('list-here');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async () => {
    const items = await fetchItems();
    listEl.textContent = '';
    // console.log(items);
    for (let item of items) {
        const newItem = renderItem(item);
        listEl.append(newItem);
    }
});
