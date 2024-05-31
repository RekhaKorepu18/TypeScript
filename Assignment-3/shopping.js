var ShoppingItem = /** @class */ (function () {
    function ShoppingItem(newitem) {
        this.newitem = newitem;
        this.deleted = false;
        this.done = false;
    }
    ShoppingItem.prototype.toggleDone = function () {
        this.done = !this.done;
    };
    ShoppingItem.prototype.deleteItem = function () {
        this.deleted = true;
    };
    return ShoppingItem;
}());
var shoppingList = [];
function showList() {
    var shoppingListElement = document.getElementById('shoppingList');
    var markedCountElement = document.getElementById('markedCount');
    var unmarkedCountElement = document.getElementById('unmarkedCount');
    var totalCountElement = document.getElementById('totalCount');
    shoppingListElement.innerHTML = '';
    var markedCount = 0;
    var unmarkedCount = 0;
    shoppingList.forEach(function (item, index) {
        if (!item.deleted) {
            createListItem(item, index, shoppingListElement);
            if (item.done) {
                markedCount++;
            }
            else {
                unmarkedCount++;
            }
        }
    });
    markedCountElement.textContent = "Marked: ".concat(markedCount);
    unmarkedCountElement.textContent = "Unmarked: ".concat(unmarkedCount);
    totalCountElement.textContent = "Total: ".concat(markedCount + unmarkedCount);
}
function createListItem(item, index, parentElement) {
    var li = document.createElement('li');
    li.classList.add('shopping-item');
    if (item.done) {
        li.classList.add('done');
    }
    li.textContent = item.newitem;
    li.addEventListener('click', function () {
        toggleItem(index);
    });
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        deleteShoppingItem(index);
    });
    li.appendChild(deleteBtn);
    parentElement.appendChild(li);
}
function addItem(item) {
    if (item.trim() !== '') {
        var newItem = new ShoppingItem(item.trim());
        shoppingList.push(newItem);
        var shoppingListElement = document.getElementById('shoppingList');
        createListItem(newItem, shoppingList.length - 1, shoppingListElement);
        updateCounts();
    }
    else {
        window.alert("Oops! you have not entered any item");
        return;
    }
}
function deleteShoppingItem(index) {
    shoppingList[index].deleteItem();
    showList();
}
function toggleItem(index) {
    shoppingList[index].toggleDone();
    showList();
}
function updateCounts() {
    var markedCountElement = document.getElementById('markedCount');
    var unmarkedCountElement = document.getElementById('unmarkedCount');
    var totalCountElement = document.getElementById('totalCount');
    var markedCount = 0;
    var unmarkedCount = 0;
    shoppingList.forEach(function (item) {
        if (!item.deleted) {
            if (item.done) {
                markedCount++;
            }
            else {
                unmarkedCount++;
            }
        }
    });
    markedCountElement.textContent = "Marked: ".concat(markedCount);
    unmarkedCountElement.textContent = "Unmarked: ".concat(unmarkedCount);
    totalCountElement.textContent = "Total: ".concat(markedCount + unmarkedCount);
}
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    (_a = document.getElementById('addItemBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var newItemInput = document.getElementById('newItemInput');
        addItem(newItemInput.value);
        newItemInput.value = '';
    });
    (_b = document.getElementById('newItemInput')) === null || _b === void 0 ? void 0 : _b.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            var target = event.target;
            addItem(target.value);
            target.value = '';
        }
    });
    (_c = document.getElementById('hideCompletedCheckbox')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', function (event) {
        var hide = event.target.checked;
        var doneItems = document.querySelectorAll('.shopping-item.done');
        doneItems.forEach(function (item) {
            item.style.display = hide ? 'none' : 'block';
        });
    });
    showList();
});
