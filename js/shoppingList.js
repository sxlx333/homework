// import { formatShoppingList } from "./formatShoppingList.js";

export function shoppingList(masyvas) {
    if (arguments.length !== 1) {
        return 'Ši funkcija reikalauja įvesti tiksliai 1 kintamajį';
    }
    if (Array.isArray(masyvas) === false) {
        return 'Kintamasis turi būti masyvas';
    }
    if (masyvas.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    const headers = [
        'Pavadinimas',
        'Kiekis',
        'Vieneto kaina',
        'Viso mokėti'
    ];

function formatShoppingList(list) {
    const formattedLines = list.map((item, index) => {
        const unitPriceInEur = (item.unitPrice / 100).toFixed(2);
        const totalPrice = ((item.amount * item.unitPrice) / 100).toFixed(2);

        return [         
            `${(index + 1).toString()}. ${item.name}`,
            `${item.amount} vnt`,
            `${unitPriceInEur} Eur`,
            `${totalPrice} Eur`
        ];
    });

    const maxLengths = headers.map((header, i) =>
        Math.max(header.length, ...formattedLines.map(row => row[i].length))
    );

    const formattedOutput = formattedLines.map(row =>
        row.map((value, i) => value.padEnd(maxLengths[i])).join(' | ')
    );

    const formattedHeader = headers.map((header, i) =>
        header.padEnd(maxLengths[i])
    ).join(' | ');

    const maxLength = Math.max(...[formattedHeader, ...formattedOutput].map(line => line.length));
    const hyphenLine = '-'.repeat(maxLength);

    return `
${hyphenLine}
${formattedHeader}
${hyphenLine}
${formattedOutput.join('\n')}
${hyphenLine}
            `.trim();
        }

    const totalItems = masyvas.length;
    const itemWord = totalItems === 1 ? 'prekė' : 'prekės';  // reikia pratestinti 21-na prekė, 22-dvi prekės/prekių            reikes zaisti su AND OR
    const introLine = `Jūsų prekių krepšelyje yra ${totalItems} ${itemWord}:`;
    return `
${introLine}
${formatShoppingList(masyvas)}
    `.trim();
}