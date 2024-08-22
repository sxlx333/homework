

export function shoppingList(masyvas) {
    if (Array.isArray(masyvas) === false) {
        return 'Funkcijos parametras turi būti masyvas.';
    }
    if (masyvas.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }     
    for (let i = 0; i < masyvas.length; i++) {
        const item = masyvas[i];
        if (typeof item !== 'object' 
        || item === null 
        || Array.isArray(item) 
        || Object.keys(item).length === 0) {
            return "Masyvas turi turėti objektą su savybėmis, pvz.: id: 1, name: 'Pomidoras', amount: 1000000, unitPrice: 199.";
        }
        if (typeof item.id !== 'number' 
        || isNaN(item.id)
        || item.id < 0) {
            return 'Kiekvienas objektas turi turėti "id" savybę", kuri yra teigiamas skaičius t.y. didesnis už 0.';
        }
        if (typeof item.name !== 'string' 
        || item.name.trim() === '') {
            return 'Kiekvienas objektas turi turėti "name" savybę, kuri yra ne tuščias tekstas.';
        }
        if (typeof item.amount !== 'number' 
        || !Number.isInteger(item.amount) 
        || item.amount <= 0) {
            return 'Kiekvienas objektas turi turėti "amount" savybę, kuri yra teigiamas sveikas skaičius.';
        }
        if (typeof item.unitPrice !== 'number' 
        || item.unitPrice <= 0) {
            return 'Kiekvienas objektas turi turėti "unitPrice" savybę, kuri yra teigiamas skaičius.';
        }
    }
    const totalItems = masyvas.length;

    let itemWord;
    const lastDigit = totalItems % 10; 
    const lastTwoDigits = totalItems % 100; 
    
    if (lastDigit === 1 && lastTwoDigits !== 11) {
        itemWord = 'prekė'; 
    } else if (lastDigit >= 2 && lastDigit <= 9 && (lastTwoDigits <10 || lastTwoDigits > 20)) {
        itemWord = "prekės"; 
    } else {
        itemWord = "prekių"; 
    }
    const introLine = `Jūsų prekių krepšelyje yra ${totalItems} ${itemWord}:`;

function formatShoppingList(list) {
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
        const formattedLine = [\
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
    const maxLength = Math.max(formattedHeader.length, ...formattedOutput.split('\n').map(line => line.length));
    const hyphenLine = '-'.repeat(maxLength);
    return `
${hyphenLine}
${formattedHeader}
${hyphenLine}
${formattedOutput}
${hyphenLine}
            `.trim();
        }

    return `
${introLine}
${formatShoppingList(masyvas)}
    `.trim();
}