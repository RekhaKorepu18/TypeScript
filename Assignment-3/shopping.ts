interface ShoppingItem {
    newitem: string;
    deleted: boolean;
    done: boolean;
}

const shoppingList: ShoppingItem[] = [];

function showList(): void {
    const shoppingListElement = document.getElementById('shoppingList') as HTMLUListElement | null;
    const markedCountElement = document.getElementById('markedCount') as HTMLElement | null;
    const unmarkedCountElement = document.getElementById('unmarkedCount') as HTMLElement | null;
    const totalCountElement = document.getElementById('totalCount') as HTMLElement | null;

    if (!shoppingListElement || !markedCountElement || !unmarkedCountElement || !totalCountElement) {
        return;
    }

    shoppingListElement.innerHTML = '';

    let markedCount = 0;
    let unmarkedCount = 0;

    shoppingList.forEach((item, index) => {
        if (!item.deleted) {
            const li = document.createElement('li');
            li.classList.add('shopping-item');

            if (item.done) {
                li.classList.add('done');
                markedCount++;
            } else {
                unmarkedCount++;
            }

            li.textContent = item.newitem;

            li.addEventListener('click', () => {
                toggle(index);
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', (event: MouseEvent) => {
                event.stopPropagation();
                deleteItem(index);
            });

            li.appendChild(deleteBtn);
            shoppingListElement.appendChild(li);
        }
    });

    markedCountElement.textContent = `Marked: ${markedCount}`;
    unmarkedCountElement.textContent = `Unmarked: ${unmarkedCount}`;
    totalCountElement.textContent = `Total: ${markedCount + unmarkedCount}`;
}

function addItem(item: string): void {
    if (item.trim() !== '') {
        shoppingList.push({
            newitem: item.trim(),
            deleted: false,
            done: false
        });
        showList();
    } else {
        window.alert("Oops! you have not entered any item");
    }
}

function deleteItem(index: number): void {
    shoppingList[index].deleted = true;
    showList();
}

function toggle(index: number): void {
    shoppingList[index].done = !shoppingList[index].done;
    showList();
}

function setupEventListeners(): void {
    const addItemBtn = document.getElementById('addItemBtn') as HTMLButtonElement | null;
    const newItemInput = document.getElementById('newItemInput') as HTMLInputElement | null;
    const hideCompletedCheckbox = document.getElementById('hideCompletedCheckbox') as HTMLInputElement | null;

    addItemBtn?.addEventListener('click', () => {
        if (newItemInput) {
            addItem(newItemInput.value);
            newItemInput.value = '';
        }
    });

    newItemInput?.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            addItem((event.target as HTMLInputElement).value);
            (event.target as HTMLInputElement).value = '';
        }
    });

    hideCompletedCheckbox?.addEventListener('change', (event: Event) => {
        const hide = (event.target as HTMLInputElement).checked;
        const doneItems = document.querySelectorAll('.shopping-item.done');
        doneItems.forEach((item) => {
            (item as HTMLElement).style.display = hide ? 'none' : 'block';
        });
    });

    showList();
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        setupEventListeners();
    });
}
