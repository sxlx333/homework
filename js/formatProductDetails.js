export function formatProductDetails(product) {
        const headerLine = 'Prekės informacija';
        const headers = [ 
            'ID',
            'Pavadinimas',
            'Kiekis',
            'Vieneto kaina',
            'Viso mokėti'
        ];

    const details = [];     
    details.push(product.id.toString());
    details.push(product.name);
    details.push(`${product.amount} vnt`);
    details.push(`${(product.unitPrice / 100).toFixed(2)} Eur`);
    details.push(`${((product.amount * product.unitPrice) / 100).toFixed(2)} Eur`);
    
    let maxHeaderLength = 0; 
    for (let i = 0; i < headers.length; i++) {
        if (headers[i].length > maxHeaderLength) {
            maxHeaderLength = headers[i].length;
        }
    }
    
    let formattedOutput = ''; 
    for (let i = 0; i <headers.length; i++) {
        const header = headers[i].padEnd(maxHeaderLength); 
        const detail = details[i];  
        formattedOutput += `${header} | ${detail}\n`;  
    }

    let maxLength = headerLine.length; 
    const outputLines = formattedOutput.split('\n') 
    for (let i = 0; i < outputLines.length; i++) {
        if (outputLines[i].length > maxLength) {
            maxLength = outputLines[i].length; 
        }
    }
    const hyphenLine = '-'.repeat(maxLength); 

    const result = `
${hyphenLine}
${headerLine.padEnd(maxLength)}
${hyphenLine}
${formattedOutput.trim()}
${hyphenLine}
    `.trim();
    return result; 
}