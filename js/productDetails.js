import { formatProductDetails } from "./formatProductDetails.js";

export function productDetails(masyvas, skaiciusNaudojamasId) {
    if (Array.isArray(masyvas) === false) { 
        return 'Pirmoji reikšmė turi būti masyvas';
    }
    if (masyvas.length === 0) { 
        return 'Masyvas turi turėti objektą';
    }
    for (let i = 0; i < masyvas.length; i++) {  
        const item = masyvas[i];
        if (typeof item !== 'object'   
        || item === null 
        || Array.isArray(item) 
        || Object.keys(item).length === 0){ 
        return 'Masyve negali būti tuščias objektas';
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
     
    if (typeof skaiciusNaudojamasId !== "number" || isNaN(skaiciusNaudojamasId) || !isFinite(skaiciusNaudojamasId)) {
        return 'Antroji reikšmė turi būti skaičius';
    }
    
    let product = null;
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i].id === skaiciusNaudojamasId) {
            product = masyvas[i];
            break;
        }
    }
    
    if (product === null) {
        return `Prekė, su ID: ${skaiciusNaudojamasId} neegzistuoja.`;
    }

    return formatProductDetails(product); 
}