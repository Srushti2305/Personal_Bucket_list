function addItem() {
    const inputField = document.getElementById('inputItem');
    const itemText = inputField.value.trim(); 

    if (itemText === "") {
        alert("Please enter an item."); 
        return; 
    }

    const newItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.width = '15px'; 
    checkbox.style.height = '15px'; 

    const label = document.createElement('label');
    label.textContent = itemText; 
    label.style.marginLeft = '5px'; 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        newItem.remove(); 
    };
    
    newItem.appendChild(checkbox);
    newItem.appendChild(label);
    newItem.appendChild(deleteBtn); 

    const itemList = document.getElementById('itemList');
    itemList.appendChild(newItem); 

    inputField.value = "";
}