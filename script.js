// List of items with their information
// Attributes for each item: itemTitle, itemPrice, itemDescription, itemImage, sellerName, sellerCity, sellerPhoneNumber.
let items = [{
    itemTitle: "Bicycle",
    itemPrice: 50,
    itemDescription: "2 years old. Used a couple of times a week",
    itemImage: "https://upload.wikimedia.org/wikipedia/commons/4/48/Whippet_Safety_Bicycle.jpg",
    sellerName: "John",
    sellerCity: "London",
    sellerPhoneNumber: "123123123"
}];
// Sell button, Adding each items property
// Change to page to selling page and vice versa
document.getElementById("items").innerHTML = items;

function changePage() {
    "use strict";
    if (document.getElementById("button").innerHTML === "Sell") {
        document.getElementById("form").style.display = "flex";
        document.getElementById("button").innerHTML = "Back";
    } else {
        document.getElementById("form").style.display = "none";
        document.getElementById("button").innerHTML = "Sell";
    }
    // Fill in each property with a form
}
// Display all properties of each item
// function displayList {
//   for (var i = items.length - 1; i >= 0; i--) {
//    document.write(items[i]);
//   }
//  document.getElementById("items").innerHTML = items;
// }
// Remove your item