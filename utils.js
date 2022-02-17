export function renderItem(item) {
    const li = document.createElement('li');
    li.classList.add('item');
    if (item.complete) {
        li.classList.add('bought');
    }
    li.textContent = item.item;
    return li;
}