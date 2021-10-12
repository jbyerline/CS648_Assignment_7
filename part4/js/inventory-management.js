function view(inventory) {
    let i, stored;
    let inventoryString = "";
    for (i = 0; i < inventory.length; i++) {
        stored = localStorage.getItem(inventory[i].sku);
        if (stored !== null) {
            inventory[i].quantity = stored;
        }
        inventoryString += (" SKU: "+ inventory[i].sku + "\n Product: " + inventory[i].product + "\n Quantity: " + "(" + inventory[i].quantity + ")" + "\n Cost: $" + inventory[i].cost + "\n\n");
    }
    window.alert(inventoryString);
}

function update(inventory) {
    let newQuantity, skuToUpdate;
    skuToUpdate = parseInt(window.prompt("Enter the sku to update"), 10);
    if (skuToUpdate === null || isNaN(skuToUpdate)) {
        window.alert("The entered sku is not valid");
        return false;
    } else {
        let skuIndex = -1;
        inventory.forEach((item, index) => {
            if (item.sku === skuToUpdate){
                skuIndex = index;
            }
        });
        if(skuIndex !== -1){
            newQuantity = parseInt(window.prompt("Enter the new quantity"), 10);
            if (newQuantity === null || isNaN(newQuantity)) {
                window.alert("The quantity you entered is not valid");
            } else {
                localStorage.setItem(inventory[skuIndex].sku, newQuantity);
                inventory[skuIndex].quantity = newQuantity;
                window.alert("The quantity of \"" + inventory[skuIndex].product + "\" was updated to " + newQuantity + " unit(s)");
                view(inventory);
                return true;
            }
        } else {
            window.alert("The sku you entered is not present in inventory");
            return false;
        }
    }
}

function displayMenu() {
    window.alert("Welcome to the Inventory Management Application \n\nCOMMAND MENU\n\nview - view all products\nupdate - update inventory\nexit - exit the program");
}

function getInventory() {
    let tshirt = [], jeans = [], jacket = [], hat = [], socks = [], inventory;

    tshirt.sku = 101;
    tshirt.product = "TShirt";
    tshirt.quantity = 17;
    tshirt.cost = 24.99;

    jeans.sku = 102;
    jeans.product = "Jeans";
    jeans.quantity = 33;
    jeans.cost = 49.99;

    jacket.sku = 103;
    jacket.product = "Jacket";
    jacket.quantity = 23;
    jacket.cost = 39.99;

    hat.sku = 104;
    hat.product = "Belt";
    hat.quantity = 15;
    hat.cost = 19.99;

    socks.sku = 105;
    socks.product = "Socks";
    socks.quantity = 13;
    socks.cost = 9.99;

    inventory = [tshirt, jeans, jacket, hat, socks];

    return inventory;
}

window.addEventListener("load", function () {
    let inventory, command;
    displayMenu();
    inventory = getInventory();
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("This is not a valid command");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated");
});
