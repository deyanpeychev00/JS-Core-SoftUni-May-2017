/**
 * Created by Deyan Peychev on 31-Jul-17.
 */
console.log('Before Promise');

let p = new Promise(function(resolve, reject){
    setTimeout(() => resolve('Success'), 1000);

});

console.log('After Promise');

p.then((data) => console.log(data));