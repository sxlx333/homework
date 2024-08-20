import { shoppingList } from "./js/shoppingList.js";
import { productDetails } from "./js/productDetails.js";

const emptyList = [];

console.log(shoppingList(emptyList));
console.log(productDetails(emptyList, 42069));

const firstShoppingList = [
    {
        id: 1,
        name: 'Pomidoras',
        amount: 1000000,
        unitPrice: 199,
    },
    {
        id: 3,
        name: 'Agurkas',
        amount: 2,
        unitPrice: 50,
    },
    {
        id: 7,
        name: 'Svogūnas',
        amount: 1,
        unitPrice: 45,
    },
];

console.log(shoppingList(firstShoppingList));
console.log(productDetails(firstShoppingList, 42069));
console.log(productDetails(firstShoppingList, 1));
console.log(productDetails(firstShoppingList, 3));
console.log(productDetails(firstShoppingList, 7));

const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];

console.log(shoppingList(singleProductShoppingList));
console.log(productDetails(singleProductShoppingList, 42069));
console.log(productDetails(singleProductShoppingList, 2));