/**
 * Created by Deyan Peychev on 05-Jun-17.
 */
function calculateBill(input) {
    let products = [];
    let bill = 0;
    for (let i = 0; i < input.length; i++) {
        if(i%2===0){
            products.push(input[i]);
        }else{
            bill+=Number(input[i]);
        }
    }
    console.log(`You purchased ${products.join(', ')} for a total sum of ${bill}`);
}
// calculateBill(['Cola', '1.35', 'Pancakes', '2.88']);