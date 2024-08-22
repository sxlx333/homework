import { formatShoppingList } from "./formatShoppingList.js";

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
            return 'Kiekvienas objektas turi turėti "id" savybę", kuri yra teigiamas skaičius, t.y. didesnis už 0.';
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

    return `
${introLine}
${formatShoppingList(masyvas)}
    `.trim();
}