export function productDetails(a, b) {
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