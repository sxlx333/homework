// import { formatProductDetails } from "./formatProductDetails.js";

export function productDetails(masyvas, skaiciusNaudojamasId) {
    if (arguments.length !== 2) {   
        return 'Ši funkcija reikalauja įvesti tiksliai 2 kintamuosius';
    }
    if (Array.isArray(masyvas) === false) {
        return 'Pirmoji reikšmė turi būti masyvas';
    }
    if (masyvas.length === 0) {
        return 'Pirmoji reikšmė, masyvas turi turėti objektą';
    }
    if (!masyvas.every(
            item => typeof item === 'object' 
            && item !== null 
            && !Array.isArray(item) 
            && Object.keys(item).length > 0)
        ){
        return 'Pirmoji reikšmė - masyve turi būti tik objektai ir jie turi būti ne tušti';
    } 
    if (typeof skaiciusNaudojamasId !== "number" || isNaN(skaiciusNaudojamasId) || !isFinite(skaiciusNaudojamasId)) {
        return 'Antroji reikšmė turi būti skaičius';
    }
    if (!masyvas.some(item => typeof item.id === 'number' && item.id === skaiciusNaudojamasId)) {
        return `Prekė, su ID: ${skaiciusNaudojamasId} neegzistuoja.`;
    } 
      const headers = [
            'ID',
            'Pavadinimas',
            'Kiekis',
            'Vieneto kaina',
            'Viso mokėti'
        ];
    function formatProductDetails(product) {
        const headerLine = 'Prekės informacija';
  
    
        const details = [
            product.id.toString(),
            product.name,
            `${product.amount} vnt`,
            `${(product.unitPrice / 100).toFixed(2)} Eur`,
            `${((product.amount * product.unitPrice) / 100).toFixed(2)} Eur`
        ];
    
    // Calculate the maximum length for each header to align the '|' symbols vertically
    const maxHeaderLength = Math.max(...headers.map(header => header.length));
    
    // Format each line to align the content with padding on the header side only
    const formattedOutput = headers.map((header, i) =>
        `${header.padEnd(maxHeaderLength)} | ${details[i]}` // header.padEnd(maxHeaderLength) ensures that the headers are padded to the same length, keeping the | symbols aligned.
    ); // This approach ensures that the | symbols are aligned consistently, regardless of the content length on the right side, with the alignment determined by the length of the headers on the left.

    // Determine the max length for the separator line
    const maxLength = Math.max(...formattedOutput.map(line => line.length));
    const hyphenLine = '-'.repeat(maxLength);

    return `
${hyphenLine}
${headerLine.padEnd(maxLength)}
${hyphenLine}
${formattedOutput.join('\n')}
${hyphenLine}
    `.trim();
    }

    const product = masyvas.find(item => item.id === skaiciusNaudojamasId);

    return formatProductDetails(product);
}