/**
 * Created by Deyan Peychev on 06-Jul-17.
 */
function getModel() {
    let firstNum, secondNum, result;

    function init(selector1, selector2, resultSelector) {
        firstNum = $(selector1);
        secondNum = $(selector2);
        result = $(resultSelector);
    }
    function add() {
        result.val(Number(firstNum.val()) + Number(secondNum.val()));
    }
    function subtract() {
        result.val(Number(firstNum.val()) - Number(secondNum.val()));
    }

    return {
        init,
        add,
        subtract
    }
}