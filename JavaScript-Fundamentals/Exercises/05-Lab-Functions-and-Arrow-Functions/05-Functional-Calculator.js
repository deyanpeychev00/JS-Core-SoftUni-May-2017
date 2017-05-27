/**
 * Created by Deyan Peychev on 10-May-17.
 */
function calculate(num1,num2, command) {
    [num1, num2] = [num1, num2].map(Number);

    switch(command){
        case '+':console.log(num1+num2);break;
        case '-':console.log(num1-num2);break;
        case '/':console.log(num1/num2);break;
        case '*':console.log(num1*num2);break;
    }
}
//calculate(['5','-8','+']);