/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function createRegister(input) {
    let brands = new Map();
    for (let line of input) {
        [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);
        if(!brands.has(brand)){
            brands.set(brand, new Map());
            let currentBrand = brands.get(brand);
            if(!currentBrand.has(model)){
                currentBrand.set(model, quantity);
            }else{
                let currentQuantity = currentBrand.get(model);
                currentBrand.set(model, currentQuantity+quantity);
            }
        }else{
            let currentBrand = brands.get(brand);
            if(!currentBrand.has(model)){
                currentBrand.set(model, quantity);
            }else{
                let currentQuantity = currentBrand.get(model);
                currentBrand.set(model, currentQuantity+quantity);
            }
        }
    }
    // console.log(brands);
    for (let [brand, models] of [...brands]) {
        console.log(brand);
        for (let [model, quantity] of [...models]) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
/*
createRegister([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10',
    'Audi | Q7 | 1000',
]);*/
