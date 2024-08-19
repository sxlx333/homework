import { formatShoppingList } from "./formatShoppingList.js";

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

    const totalItems = masyvas.length;
    const itemWord = totalItems === 1 ? 'prekė' : 'prekės';  // reikia pratestinti 21-na prekė, 22-dvi prekės/prekių
    const introLine = `Jūsų prekių krepšelyje yra ${totalItems} ${itemWord}:`;
    const headerLine = 'Pavadinimas | Kiekis | Vieneto kaina | Viso mokėti';

const formattedLines = formatShoppingList(masyvas);

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