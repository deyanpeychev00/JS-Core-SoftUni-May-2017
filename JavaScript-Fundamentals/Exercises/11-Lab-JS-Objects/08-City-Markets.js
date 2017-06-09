/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function solve(input){
    let towns = new Map();

    for (let el of input) {
        [town, product, sales] = el.split(' -> ');
        [quantity, pricePerOne] = sales.split(' : ');
        // console.log(`${town} ${product} ${quantity} ${pricePerOne}`);
        //check if town exists
        if(!towns.has(town)){
            towns.set(town, new Map());
            if(!towns.get(town).has(product)){
                towns.get(town).set(product, quantity*pricePerOne);
            }else{
                let currentSales = towns.get(town).get(product);
                towns.get(town).set(product, currentSales + (quantity*pricePerOne));
            }
        }else{
            if(!towns.get(town).has(product)){
                towns.get(town).set(product, quantity*pricePerOne);
            }else{
                let currentSales = towns.get(town).get(product);
                towns.get(town).set(product, currentSales + (quantity*pricePerOne));
            }
        }
    }
    for (let map of towns) {
        console.log(`Town - ${map[0]}`);
        for (let [product, sales] of map[1]) {
            console.log(`$$$${product} : ${sales}`)
        }
    }
}
/*
solve([
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3',
'Sofia -> Laptops HP -> 10 : 10'
]);*/
