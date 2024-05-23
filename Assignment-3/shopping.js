var shoppingList = [];
function showList() {
    var shoppingListElement = document.getElementById('shoppingList');
    var markedCountElement = document.getElementById('markedCount');
    var unmarkedCountElement = document.getElementById('unmarkedCount');
    var totalCountElement = document.getElementById('totalCount');
    if (!shoppingListElement || !markedCountElement || !unmarkedCountElement || !totalCountElement) {
        return;
    }
    shoppingListElement.innerHTML = '';
    var markedCount = 0;
    var unmarkedCount = 0;
    shoppingList.forEach(function (item, index) {
        if (!item.deleted) {
            var li = document.createElement('li');
            li.classList.add('shopping-item');
            if (item.done) {
                li.classList.add('done');
                markedCount++;
            }
            else {
                unmarkedCount++;
            }
            li.textContent = item.newitem;
            li.addEventListener('click', function () {
                toggle(index);
            });
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', function (event) {
                event.stopPropagation();
                deleteItem(index);
            });
            li.appendChild(deleteBtn);
            shoppingListElement.appendChild(li);
        }
    });
    markedCountElement.textContent = "Marked: ".concat(markedCount);
    unmarkedCountElement.textContent = "Unmarked: ".concat(unmarkedCount);
    totalCountElement.textContent = "Total: ".concat(markedCount + unmarkedCount);
}
function addItem(item) {
    if (item.trim() !== '') {
        shoppingList.push({
            newitem: item.trim(),
            deleted: false,
            done: false
        });
        showList();
    }
    else {
        window.alert("Oops! you have not entered any item");
    }
}
function deleteItem(index) {
    shoppingList[index].deleted = true;
    showList();
}
function toggle(index) {
    shoppingList[index].done = !shoppingList[index].done;
    showList();
}
function setupEventListeners() {
    var addItemBtn = document.getElementById('addItemBtn');
    var newItemInput = document.getElementById('newItemInput');
    var hideCompletedCheckbox = document.getElementById('hideCompletedCheckbox');
    addItemBtn === null || addItemBtn === void 0 ? void 0 : addItemBtn.addEventListener('click', function () {
        if (newItemInput) {
            addItem(newItemInput.value);
            newItemInput.value = '';
        }
    });
    newItemInput === null || newItemInput === void 0 ? void 0 : newItemInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addItem(event.target.value);
            event.target.value = '';
        }
    });
    hideCompletedCheckbox === null || hideCompletedCheckbox === void 0 ? void 0 : hideCompletedCheckbox.addEventListener('change', function (event) {
        var hide = event.target.checked;
        var doneItems = document.querySelectorAll('.shopping-item.done');
        doneItems.forEach(function (item) {
            item.style.display = hide ? 'none' : 'block';
        });
    });
    showList();
}
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        setupEventListeners();
    });
}
