let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
];

function addItem(inventory, item) {
    inventory.push(item);
    console.log('Adding item:', inventory);
}

function updateItem(inventory, id, newDetails) {
    let item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
        console.log('Updating item:', inventory);
    }
}

function deleteItem(inventory, id) {
    let index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
        console.log('Deleting item:', inventory);
    }
}

function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

function printInventory(inventory) {
    console.log('Inventory:', inventory);
}

console.log('Initial Inventory:');
printInventory(inventory);

addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
updateItem(inventory, 2, { quantity: 30 });
deleteItem(inventory, 2);
