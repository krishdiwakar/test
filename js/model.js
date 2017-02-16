/* Data */
var todoItems = [{
        description: "Car wash"
    },
    {
        description: "Attend Interview"
    },
    {
        description: "Shopping"
    }
];

/* List all items */
function read() {
    return todoItems;
}

/* Create new item */
function create(description) {
    var itemObj = {};
    itemObj.description = description;
    todoItems.push(itemObj);
}

/* update an item */
function update(id, newDescription) {
    todoItems[id].description = newDescription;
}

/* delete an item */
function deleteItem(id) {
    todoItems.splice(id, 1);
}
