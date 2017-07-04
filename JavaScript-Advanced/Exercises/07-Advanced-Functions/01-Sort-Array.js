function sort(array, command) {
    function ascendingSort(a,b) {
        return a-b;
    }
    function descendingSort(a,b) {
        return b-a;
    }

    let sortingCriteria = {
        'asc': ascendingSort,
        'desc': descendingSort
    };

    return array.sort(sortingCriteria[command]);
}
console.log(sort([14, 7, 17, 6, 8], 'asc'));
