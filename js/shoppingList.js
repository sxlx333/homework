export function shoppingList(a) {
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