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
    if (!a.some(item => typeof item.id === 'number' && item.id === b)) {
        return `Prekė, su ID: ${b} neegzistuoja.`;
    } 

    const headerLine = 'Prekės informacija';

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

        const maxLengths = headers.map((header, i) => 
            Math.max(header.length, details[i].length)
        );

        const formattedLines = headers.map((header, i) =>
            `${header} | ${details[i]}`
        );

        const maxLength = Math.max(...formattedLines.map(line => line.length));
        const hyphenLine = '-'.repeat(maxLength);

        return `
${hyphenLine}
${headerLine}
${hyphenLine}
${formattedLines.join('\n')}
${hyphenLine}
        `.trim();
    }

    const product = a.find(item => item.id === b);

    return formatProductDetails(product);
}