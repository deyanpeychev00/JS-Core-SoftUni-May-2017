/**
 * Created by Deyan Peychev on 02-Jun-17.
 */
function extract(input) {
    let count = input.shift();

    console.log(input.slice(0, count).join(' '));
    console.log(input.slice(-count).join(' '));
}
/*extract([2,
7, 8, 9]
);*/
