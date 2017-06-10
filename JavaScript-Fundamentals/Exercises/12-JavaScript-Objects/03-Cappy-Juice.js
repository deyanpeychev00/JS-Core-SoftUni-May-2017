/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function cappyJuice(input) { //array of string
    let juiceBottles = new Map();
    let juiceQuantity = new Map();

    for (let line of input) {
        [juice, quantity] = line.split(' => ');
        // console.log(juice + ' ' + quantity);
        quantity = Number(quantity);
        if(!juiceQuantity.has(juice)){
            juiceQuantity.set(juice, quantity);
            // console.log(juiceQuantity);
        }else{
            let currentQuantity = juiceQuantity.get(juice);
            juiceQuantity.set(juice, currentQuantity+quantity);

            // console.log(juiceQuantity);
        }
        let currentQuantity = juiceQuantity.get(juice);
        if(currentQuantity >=1000){
            if(!juiceBottles.has(juice)){
                juiceBottles.set(juice, Math.trunc(currentQuantity/1000));
                juiceQuantity.set(juice, currentQuantity%1000);
            }else{
                let currentBottles = juiceBottles.get(juice);
                juiceBottles.set(juice, currentBottles + Math.trunc(currentQuantity/1000));
                juiceQuantity.set(juice, currentQuantity%1000);
            }
        }

    }
    // console.log(juiceBottles);
    for (let kvp of [...juiceBottles]) {
        console.log(kvp.join(' => '));
    }
}
/*cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549',
]);*/
/*cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',
]);*/
