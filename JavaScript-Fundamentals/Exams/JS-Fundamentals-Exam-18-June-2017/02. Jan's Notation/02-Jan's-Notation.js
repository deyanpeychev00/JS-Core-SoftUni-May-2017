/**
 * Created by Deyan Peychev on 18-Jun-17.
 */
function solve(input) {
    function operate(firstNum, secondNum, operand) {
        switch (operand) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                return Math.floor(firstNum / secondNum);
        }
    }
    function isOperand(element) {
        switch(element){
            case '+':
            case '-':
            case '*':
            case '/': return true;
        }
        return false;
    }
    let numArr = input.filter(e=> {
        if(e!== '+' && e!=='-' && e!=='*' && e!=='/'){
            return e;
        }
    });
    if(numArr.length < 2){
        console.log(`Error: not enough operands!`);
    }else{
        let err = '';
        while (typeof input.reduce((a,b) => a+b) === "string"){
            for (let index = 0; index <= input.length; index++) {
                let isOperation = isOperand(input[index]);
                if(isOperation){
                    let secondNum = input[index-1];
                    let firstNum = input[index-2];
                    // console.log(secondNum);
                    // console.log(firstNum);
                    let result = operate(firstNum, secondNum, input[index]);
                    input.splice(index-2,3,result);
                    // console.log(input);
                    break;
                }
            }
        }
        if(input.length === 1){
            console.log(input[0]);
        }else if(input.length>1){
            console.log(`Error: too many operands!`)
        }
    }
}
solve([5, 3, 4, '*', '-']);
solve([15, '/']);
solve([7, 33, 8, '-']);
solve([3, 4, '+']);
solve([31, 2, '+', 11, '/']);
solve([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
