/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function printArr(arr) {
    let delimeter = arr.pop();
    console.log(arr.join(delimeter));
}
// printArr(['One','Two','Three', 'Four', 'Five', '-']);