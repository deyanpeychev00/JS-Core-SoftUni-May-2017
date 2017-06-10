/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function makeCatalogue(input) { //array of strings
    let catalogue = new Map();
    for (let line of input) {
        [product, price] = line.split(' : ');
        // console.log(product + ' ' + price);

        let firstLetter = product[0];
        if(price!== undefined){
            if(!catalogue.has(firstLetter)){
                catalogue.set(firstLetter, new Map());
                let catalogueProducts = catalogue.get(firstLetter);
                if(!catalogueProducts.has(product)){
                    catalogueProducts.set(product, price);
                }
            }else{
                let catalogueProducts = catalogue.get(firstLetter);
                if(!catalogueProducts.has(product)){
                    catalogueProducts.set(product, price);
                }
            }
        }
    }
    // console.log([...catalogue]);
    for (let [letter, products] of [...catalogue].sort((a,b) => a[0].localeCompare(b[0]))) {
        console.log(letter);
        for (let [product, price] of [...products].sort((a,b) => a[0].localeCompare(b[0]))) {
            console.log(`  ${product}: ${price}`);
        }
    }
}
/*
makeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);*/
/*makeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10',
    'Queens',
]);*/
