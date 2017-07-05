/**
 * Created by Deyan Peychev on 05-Jul-17.
 */
function solve(){
    let firstNum = 0;
    let secondNum = 1;

    return function (){
        let thirdNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = thirdNum;

        return firstNum;
    }
}
let fib = solve();

fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5
fib(); // 8
fib(); // 13
