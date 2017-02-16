function showItems() {
    var data = read();
    var html = "";
    // loop through data
    for (var i = 0; i < data.length; i++) {
        html += '<div class="itemRow clearfix" data-id="' + i + '">\
			<div class="itemDescription">' + data[i].description + '</div>\
			<div class="itemDelete">X</div>\
		</div>';
    }

    document.getElementById('showList').innerHTML = html;
    attachEvents();
}

function addNewItem() {
    create(document.getElementById('description').value);
    showItems();
}

function deleteAction(e) {
    var index = e.target.parentNode.getAttribute('data-id');
    deleteItem(index);
    showItems();
}

function makeItemEditable(e) {
    var originalText = e.target.innerHTML;
    var index = e.target.parentNode.getAttribute('data-id');
    e.target.innerHTML = '<input type="text" value="' + originalText + '" id="currentEdit" data-id="' + index + '"/>';

    document.getElementById('currentEdit').removeEventListener("keypress", updateItem);
    document.getElementById('currentEdit').addEventListener("keypress", updateItem);
}

function updateItem(evt) {
    if (evt.keyCode == 13) {
        var newDescription = document.getElementById('currentEdit').value;
        var index = evt.target.getAttribute('data-id');
        update(index, newDescription);
        evt.target.parentNode.innerHTML = newDescription;
    }
}

// show all items on page load
showItems();



// handle delete
function attachEvents() {
    // handle submit button click
    document.getElementById('submitButton').removeEventListener("click", addNewItem);
    document.getElementById('submitButton').addEventListener("click", addNewItem);

    // handle delete click
    var deleteButton = document.getElementsByClassName("itemDelete");

    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].removeEventListener('click', deleteAction);
        deleteButton[i].addEventListener('click', deleteAction);
    }

    var descriptions = document.getElementsByClassName('itemDescription');

    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].removeEventListener('click', makeItemEditable);
        descriptions[i].addEventListener('click', makeItemEditable);
    }
}
