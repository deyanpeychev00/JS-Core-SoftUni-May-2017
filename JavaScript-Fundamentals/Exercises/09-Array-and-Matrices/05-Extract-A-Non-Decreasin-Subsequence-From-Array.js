/**
 * Created by Deyan Peychev on 03-Jun-17.
 */
function extract(arr) {
    filteredArr = arr.filter((e,i) => e >= arr[i-1]);
    filteredArr.unshift(arr[0]);
    console.log(filteredArr.join('\n'));
}
// extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);