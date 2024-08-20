// export function formatProductDetails(product) {
//     const headerLine = 'Prekės informacija';
//     const headers = [
//         'ID',
//         'Pavadinimas',
//         'Kiekis',
//         'Vieneto kaina',
//         'Viso mokėti'
//     ];

//     const details = [
//         product.id.toString(),
//         product.name,
//         `${product.amount} vnt`,
//         `${(product.unitPrice / 100).toFixed(2)} Eur`,
//         `${((product.amount * product.unitPrice) / 100).toFixed(2)} Eur`
//     ];

//     const maxLengths = headers.map((header, i) => 
//         Math.max(header.length, details[i].length)
//     );

//     const formattedLines = headers.map((header, i) =>
//         `${header} | ${details[i]}`
//     );

//     const maxLength = Math.max(...formattedLines.map(line => line.length));
//     const hyphenLine = '-'.repeat(maxLength);

//     return `
// ${hyphenLine}
// ${headerLine}
// ${hyphenLine}
// ${formattedLines.join('\n')}
// ${hyphenLine}
//     `.trim();
// }