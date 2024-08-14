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







function shoppingList (a) {
    if (arguments.length !== 1) {  // 
        return 'Ši funkcija reikalauja įvesti tiksliai 1 kintamajį';
    }
    if (Array.isArray(a) === false) {
        return 'Kintamasis turi būti masyvas';
    }
    if (a.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }

// Function to format the output
function formatShoppingList(list) {
    return list.map(item => { /*The map() method is used to create a new array by applying a function to each element in the original array (list).
        In this case, item refers to each object in the list array as map() iterates over it.*/
        const priceInEur = (item.unitPrice / 100).toFixed(2); // Convert cent to Euro
        return `${item.id}. ${item.name} | ${item.amount} vnt | ${priceInEur} Eur`;
    }).join('\n');
}
// The function returns a formatted string where each item in the array is presented in a specific format with its id, name, amount, and unitPrice (converted from cents to euros).
const formattedOutput = formatShoppingList(firstShoppingList);


    return formattedOutput;  // PATOBULINTI FUNKCIJA SHOPPING LIST
};

 console.log(shoppingList(firstShoppingList));

/********************TESTINIMAS************************** */

// console.log(shoppingList(emptyList));
// console.log(shoppingList([1, 2, 3]));
// console.log(shoppingList([1, 2, 3], {}));
// console.log('');
/********************TESTINIMAS************************** */

function productDetails (a, b) {
    if (arguments.length !== 2) {   
        return 'Ši funkcija reikalauja įvesti tiksliai 2 kintamuosius';
    }
    if (Array.isArray(a) === false) {
        return 'Pirmoji reikšmė turi būti masyvas';
    }
    if (a.length === 0) {
        return 'Pirmoji reikšmė, masyvas turi turėti objektą';
    }
    // Check if any item is not an object or is empty
    if (!a.every(
            item => typeof item === 'object' 
            && item !== null 
            && !Array.isArray(item) 
            && Object.keys(item).length > 0)
        ){
        return 'Pirmoji reikšmė - masyve turi būti tik objektai ir jie turi būti ne tušti';
    } 
    if (typeof b !== "number" || isNaN(b) || !isFinite(b)) {
        return 'Antroji reikšmė turi būti skaičius';
    }
    // Check if the number 'b' corresponds to an 'id' in the array 'a'. IF statement uses some() to check if any object in the array has an id property that is a number and matches b.
    if (!a.some(item => typeof item.id === 'number' && item.id === b)) {
        return `Prekė, su ID: ${b} neegzistuoja.`;
    } else {
    return 'teisinga'; // patobutinti funkcija
    }
};
// console.log('1.', productDetails('a'));
// console.log('2.', productDetails('a', 1));
// console.log('3.',productDetails([], 1));
// console.log('4.',productDetails([Infinity, {}], 1));
// console.log('5.',productDetails([{name: 'Jonas'}], 1));
// console.log('6.',productDetails(firstShoppingList, 1));
// console.log('------------test su b reiksme---------------');
// console.log('1.', productDetails([{name: 'Petras', age: 99}]));
// console.log('2.', productDetails([{name: 'Petras', age: 99}], 'a'));
// console.log('3.', productDetails(firstShoppingList, {}));
// console.log('4.', productDetails(firstShoppingList, NaN));
// console.log('5.', productDetails(firstShoppingList, Infinity)); 
// console.log('6.', productDetails(firstShoppingList, [1, 2, 3]));
// console.log('7.', productDetails(firstShoppingList, 42069));
// console.log('8.', productDetails(firstShoppingList, 1));











// console.log(shoppingList(firstShoppingList));
// /*
// Jūsų prekių krepšelyje yra 3 prekės:
// -----------------------------------------------------------
// Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti
// -----------------------------------------------------------
// 1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur
// 2. Agurkas   | 2 vnt       | 0.50 Eur      | 1.00 Eur
// 3. Svogūnas  | 1 vnt       | 0.45 Eur      | 0.45 Eur
// -----------------------------------------------------------
// */

// console.log(productDetails(firstShoppingList, 42069));
// /*
// Prekė, su ID: 42069 neegzistuoja.
// */

// console.log(productDetails(firstShoppingList, 1));
// /*
// ------------------------------
// Prekės informacija
// ------------------------------
// ID            | 1
// Pavadinimas   | Pomidoras
// Kiekis        | 1000000 vnt
// Vieneto kaina | 1.99 Eur
// Viso mokėti   | 1990000.00 Eur
// ------------------------------
// */

// console.log(productDetails(firstShoppingList, 3));
// /*
// ------------------------
// Prekės informacija
// ------------------------
// ID            | 3
// Pavadinimas   | Agurkas
// Kiekis        | 2 vnt
// Vieneto kaina | 0.50 Eur
// Viso mokėti   | 1.00 Eur
// ------------------------
// */

// console.log(productDetails(firstShoppingList, 7));
// /*
// ------------------------
// Prekės informacija
// ------------------------
// ID            | 7
// Pavadinimas   | Svogūnas
// Kiekis        | 1 vnt
// Vieneto kaina | 0.45 Eur
// Viso mokėti   | 0.45 Eur
// ------------------------
// */

// const singleProductShoppingList = [
//     {
//         id: 2,
//         name: 'Kivi',
//         amount: 23,
//         unitPrice: 14,
//     },
// ];

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

// console.log(productDetails(singleProductShoppingList, 2));
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