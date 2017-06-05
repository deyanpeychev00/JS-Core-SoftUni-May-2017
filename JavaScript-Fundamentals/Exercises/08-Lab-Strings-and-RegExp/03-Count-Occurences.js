/**
 * Created by Deyan Peychev on 04-Jun-17.
 */
function count(target, string) {
    let count =0;

    let index = string.indexOf(target);

    while(index !== -1){
        count++;
        index = string.indexOf(target, index +1);
    }
    console.log(count);
}
count('haha', 'hahaha');