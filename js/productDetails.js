import { formatProductDetails } from "./formatProductDetails.js";

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

    const product = masyvas.find(item => item.id === skaiciusNaudojamasId);

    return formatProductDetails(product);
}