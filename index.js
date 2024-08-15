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


    const totalItems = a.length; // Calculate the total number of items (3 objects in array called firstShoppingList)
    const itemWord = totalItems === 1 ? 'prekė' : 'prekės';        // PANAUDOTI 
    const introLine = `Jūsų prekių krepšelyje yra ${totalItems} ${itemWord}:`; // Dynamic introLine: The introLine uses itemWord to ensure that the message uses the correct form of the word.
    const headerLine = 'Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti';










// Function to format the output
/*The map() method is used to create a new array by applying a function to each element in the original array (list).
In this case, item refers to each object in the list array as map() iterates over it.*/
function formatShoppingList(list) {
    return list.map((item, index)  => { 
        const unitPriceInEur = (item.unitPrice / 100).toFixed(2); // Convert cent to Euro and make fixed value - show 2 numbers after dot(two decimal places)
        const totalPrice = ((item.amount * item.unitPrice) / 100).toFixed(2); // Calculate totalPrice in euros
        return `${index + 1}. ${item.name} | ${item.amount} vnt | ${unitPriceInEur} Eur | ${totalPrice} Eur`;
    });
}
// The function returns a formatted string where each item in the array is presented in a specific format with it's position in the array not their ID, name, amount, and unitPrice (converted from cents to euros).




const formattedLines = formatShoppingList(a);

// Determine the maximum line length for generating the hyphen line
const lines = [introLine, headerLine, ...formattedLines];
const maxLength = Math.max(...lines.map(line => line.length));

const hyphenLine = '-'.repeat(maxLength);

// Combine all parts of the output
const finalTableOutput = `
${introLine}
${hyphenLine}
${headerLine}
${hyphenLine}
${formattedLines.join('\n')}
${hyphenLine}
`;

    return finalTableOutput.trim(); // trim to remove any unnecessary leading.trailing whitespace

};

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
    } 

    // Nested function to format and display the product details

    function formatProductDetails(product) {
        const headers = [
            'ID',
            'Pavadinimas',
            'Kiekis',
            'Vieneto kaina',
            'Viso mokėti'
        ];

        const details = [
            product.id.toString(),
            product.name,
            `${product.amount} vnt`,
            `${(product.unitPrice / 100).toFixed(2)} Eur`,
            `${((product.amount * product.unitPrice) / 100).toFixed(2)} Eur`
        ];

        // calculate the maximum width for each column
        const maxLengths = headers.map((header, i) => 
            Math.max(header.length, details[i].length)
        );

        // create the formatted lines
        const formattedLines = headers.map((header, i) =>
            `${header} | ${details[i]}`
        );

        // calculate the maximum line length for dynamic hyphenation
        const maxLength = Math.max(...formattedLines.map(line => line.length));
        const hyphenLine = '-'.repeat(maxLength);


        // construct the final output

        return `
${hyphenLine}
Prekės informacija
${hyphenLine}
${formattedLines.join('\n')}
${hyphenLine}
        `.trim();
    }

    // find the product by ID
    const product = a.find(item => item.id === b);

    // return the formatted product details
    return formatProductDetails(product);
}

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