import { checkAuth, logout, fetchItems, createItem } from '../fetch-utils.js';
import { renderItem } from '../utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listEl = document.getElementById('list-here');
const form = document.getElementById('add-item');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayItems {
    const items = await fetchItems();
    listEl.textContent = '';
    // console.log(items);
    for (let item of items) {
        const newItem = renderItem(item);
        // newItem.addEventListener('click', async() => {

        // })
        listEl.append(newItem);
    }
};

await displayItems();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const addNewItem = new FormData(form);
    // const addNewItem = document.getElementById('new-item');
    await createItem(addNewItem.get('new-item'));
    form.reset();
    await displayItems();
});
