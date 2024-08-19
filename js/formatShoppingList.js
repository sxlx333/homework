export function formatShoppingList(list) {
    return list.map((item, index)  => { 
        const unitPriceInEur = (item.unitPrice / 100).toFixed(2);
        const totalPrice = ((item.amount * item.unitPrice) / 100).toFixed(2);
        return `${index + 1}. ${item.name} | ${item.amount} vnt | ${unitPriceInEur} Eur | ${totalPrice} Eur`;
    });
}