class ShoppingItem {
    newitem: string;
    deleted: boolean;
    done: boolean;

    constructor(newitem: string) {
        this.newitem = newitem;
        this.deleted = false;
        this.done = false;
    }

    toggleDone(): void {
        this.done = !this.done;
    }

    deleteItem(): void {
        this.deleted = true;
    }
}

const shoppingList: ShoppingItem[] = [];

function showList(): void {
    const shoppingListElement = document.getElementById('shoppingList') as HTMLElement;
    const markedCountElement = document.getElementById('markedCount') as HTMLElement;
    const unmarkedCountElement = document.getElementById('unmarkedCount') as HTMLElement;
    const totalCountElement = document.getElementById('totalCount') as HTMLElement;
    shoppingListElement.innerHTML = '';

    let markedCount = 0;
    let unmarkedCount = 0;

    shoppingList.forEach((item, index) => {
        if (!item.deleted) {
            createListItem(item, index, shoppingListElement);
            if (item.done) {
                markedCount++;
            } else {
                unmarkedCount++;
            }
        }
    });

    markedCountElement.textContent = `Marked: ${markedCount}`;
    unmarkedCountElement.textContent = `Unmarked: ${unmarkedCount}`;
    totalCountElement.textContent = `Total: ${markedCount + unmarkedCount}`;
}

function createListItem(item: ShoppingItem, index: number, parentElement: HTMLElement): void {
    const li = document.createElement('li');
    li.classList.add('shopping-item');
    if (item.done) {
        li.classList.add('done');
    }
    li.textContent = item.newitem;

    li.addEventListener('click', () => {
        toggleItem(index);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteShoppingItem(index);
    });

    li.appendChild(deleteBtn);
    parentElement.appendChild(li);
}

function addItem(item: string): void {
    if (item.trim() !== '') {
        const newItem = new ShoppingItem(item.trim());
        shoppingList.push(newItem);
        const shoppingListElement = document.getElementById('shoppingList') as HTMLElement;
        createListItem(newItem, shoppingList.length - 1, shoppingListElement);
        updateCounts();
    } else {
        window.alert("Oops! you have not entered any item");
        return;
    }
}

function deleteShoppingItem(index: number): void {
    shoppingList[index].deleteItem();
    showList();
}

function toggleItem(index: number): void {
    shoppingList[index].toggleDone();
    showList();
}

function updateCounts(): void {
    const markedCountElement = document.getElementById('markedCount') as HTMLElement;
    const unmarkedCountElement = document.getElementById('unmarkedCount') as HTMLElement;
    const totalCountElement = document.getElementById('totalCount') as HTMLElement;

    let markedCount = 0;
    let unmarkedCount = 0;

    shoppingList.forEach(item => {
        if (!item.deleted) {
            if (item.done) {
                markedCount++;
            } else {
                unmarkedCount++;
            }
        }
    });

    markedCountElement.textContent = `Marked: ${markedCount}`;
    unmarkedCountElement.textContent = `Unmarked: ${unmarkedCount}`;
    totalCountElement.textContent = `Total: ${markedCount + unmarkedCount}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('addItemBtn')?.addEventListener('click', () => {
        const newItemInput = document.getElementById('newItemInput') as HTMLInputElement;
        addItem(newItemInput.value);
        newItemInput.value = '';
    });

    document.getElementById('newItemInput')?.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const target = event.target as HTMLInputElement;
            addItem(target.value);
            target.value = '';
        }
    });

    document.getElementById('hideCompletedCheckbox')?.addEventListener('change', (event) => {
        const hide = (event.target as HTMLInputElement).checked;
        const doneItems = document.querySelectorAll('.shopping-item.done') as NodeListOf<HTMLElement>;
        doneItems.forEach((item) => {
            item.style.display = hide ? 'none' : 'block';
        });
    });

    showList();
});
