function aggregateElements(elements) {
    elements = elements.map(Number);

    function sumElementsAsNumbers(value) {
        let sum = 0;
        for (let el of value) {
            sum += el;
        }
        console.log(sum);
    }

    function sumInverseValues(value) {
        let sum = 0;
        for (let el of value) {
            sum += 1 / el;
        }
        console.log(sum);
    }

    function sumElementsAsString(value) {
        let sum = '';
        for (let el of value) {
            sum += el;
        }
        console.log(sum);
    }

    sumElementsAsNumbers(elements);
    sumInverseValues(elements);
    sumElementsAsString(elements);
}
/* aggregateElements(['2', '4', '8', '16', '']);
 console.log('-----------------------');
 aggregateElements(['1', '2', '3']);*/

