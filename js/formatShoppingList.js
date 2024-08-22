export function formatShoppingList(list) {
    const headers = [
        'Pavadinimas',
        'Kiekis',
        'Vieneto kaina',
        'Viso mokėti'
    ];
    const formattedLines = [];

    for (let index = 0; index < list.length; index++) {
        const item = list[index]; 
        const unitPriceInEur = (item.unitPrice / 100).toFixed(2);
        const totalPrice = ((item.amount * item.unitPrice) / 100).toFixed(2);
        const formattedLine = [
            `${(index + 1).toString()}. ${item.name}`, 
            `${item.amount} vnt`, 
            `${unitPriceInEur} Eur`, 
            `${totalPrice} Eur` 
        ];
        formattedLines.push(formattedLine);
    }
    const maxLengths = [];
        for (let i = 0; i < headers.length; i++) {
        let maxLength = headers[i].length; 
        for (let j = 0; j < formattedLines.length; j++) {
            const row = formattedLines[j];
            if (row[i].length > maxLength) {
                maxLength = row[i].length; 
            }
        }
        maxLengths.push(maxLength); 
    }  
    let formattedHeader = '';
    for (let i = 0; i < headers.length; i++) {
        formattedHeader += headers[i].padEnd(maxLengths[i]) + ' | '; 
    }
    formattedHeader = formattedHeader.slice(0, -2); 
    let formattedOutput = '';
    for (let i = 0; i < formattedLines.length; i++) {
        let line = '';
        const row = formattedLines[i];
        for (let j = 0; j < row.length; j++) {
            line += row[j].padEnd(maxLengths[j]) + ' | ';
        }
        formattedOutput += line.slice(0, -2) + '\n'; 
    }
    
    const outputLines = formattedOutput.split('\n');

    let maxLineLength = 0;
    for (let i = 0; i < outputLines.length; i++) {
        if (outputLines[i].length > maxLineLength) {
            maxLineLength = outputLines[i].length;
        }
    }
    
    const maxLength = Math.max(formattedHeader.length, maxLineLength);
    const hyphenLine = '-'.repeat(maxLength);
    return `
${hyphenLine}
${formattedHeader}
${hyphenLine}
${formattedOutput.trimEnd()}
${hyphenLine}`
    .trim();
        }