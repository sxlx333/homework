import { shoppingList } from "./js/shoppingList.js";
import { productDetails } from "./js/productDetails.js";


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
const emptyList = [];







console.log('pirma funkcija');
console.log(shoppingList(firstShoppingList));
console.log('');

//  console.log('');
//  console.log('**********************************************');

/********************TESTINIMAS************************** */

// console.log(shoppingList(emptyList));
// console.log(shoppingList([1, 2, 3]));
// console.log(shoppingList([1, 2, 3], {}));
// console.log('');
/********************TESTINIMAS************************** */



// console.log('------antroji funkcija------');
// console.log(productDetails(firstShoppingList, 1));
// console.log(productDetails(firstShoppingList, 2));
// console.log(productDetails(firstShoppingList, 3));
// console.log(productDetails(firstShoppingList, 7));



const singleProductShoppingList = [
    {
        id: 2,
        name: 'Kivi',
        amount: 23,
        unitPrice: 14,
    },
];


console.log(shoppingList(singleProductShoppingList));

// console.log(shoppingList(singleProductShoppingList));
// /*
// Jūsų prekių krepšelyje yra 1 prekė:
// --------------------------------------------------
// Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti
// --------------------------------------------------
// 1. Kivi     | 23 vnt | 0.14 Eur      | 3.22 Eur
// --------------------------------------------------
// */

// console.log(productDetails(singleProductShoppingList, 42069));
// /*
// Prekė, su ID: 42069 neegzistuoja.
// */

console.log(productDetails(singleProductShoppingList, 2));
console.log(productDetails(singleProductShoppingList, 1));
console.log(productDetails(firstShoppingList, 7));

// /*
// ------------------------
// Prekės informacija
// ------------------------
// ID            | 2
// Pavadinimas   | Kivi
// Kiekis        | 23 vnt
// Vieneto kaina | 0.14 Eur
// Viso mokėti   | 3.22 Eur
// ------------------------
// */

