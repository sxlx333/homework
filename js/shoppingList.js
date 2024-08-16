export function shoppingList(a) {
    if (arguments.length !== 1) {
        return 'Ši funkcija reikalauja įvesti tiksliai 1 kintamajį';
    }
    if (Array.isArray(a) === false) {
        return 'Kintamasis turi būti masyvas';
    }
    if (a.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }

    const totalItems = a.length;
    const itemWord = totalItems === 1 ? 'prekė' : 'prekės';
    const introLine = `Jūsų prekių krepšelyje yra ${totalItems} ${itemWord}:`;
    const headerLine = 'Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti';

function formatShoppingList(list) {
    return list.map((item, index)  => { 
        const unitPriceInEur = (item.unitPrice / 100).toFixed(2);
        const totalPrice = ((item.amount * item.unitPrice) / 100).toFixed(2);
        return `${index + 1}. ${item.name} | ${item.amount} vnt | ${unitPriceInEur} Eur | ${totalPrice} Eur`;
    });
}

const formattedLines = formatShoppingList(a);

const lines = [introLine, headerLine, ...formattedLines];
const maxLength = Math.max(...lines.map(line => line.length));

const hyphenLine = '-'.repeat(maxLength);

const finalTableOutput = `
${introLine}
${hyphenLine}
${headerLine}
${hyphenLine}
${formattedLines.join('\n')}
${hyphenLine}
`;

    return finalTableOutput.trim();

};