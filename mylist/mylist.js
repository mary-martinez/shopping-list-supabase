import { checkAuth, logout, fetchItems, createItem, buyItem, deleteAllItems } from '../fetch-utils.js';
import { renderItem } from '../utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listEl = document.getElementById('list-here');
const form = document.getElementById('add-item');
const clearAll = document.getElementById('clear-list');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayItems() {
    const items = await fetchItems();
    listEl.textContent = '';
    // console.log(items);
    for (let item of items) {
        const newItem = renderItem(item);
        newItem.addEventListener('click', async () => {
            // item.bought = true;
            await buyItem(item.id);
            // item.classList.add('bought');
            await displayItems();
        });
        listEl.append(newItem);
    }
}

displayItems();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const addNewItem = new FormData(form);
    // const addNewItem = document.getElementById('new-item');
    await createItem(addNewItem.get('new-item'));
    form.reset();
    await displayItems();
});

clearAll.addEventListener('click', async () => {
    await deleteAllItems();
    await displayItems();
});