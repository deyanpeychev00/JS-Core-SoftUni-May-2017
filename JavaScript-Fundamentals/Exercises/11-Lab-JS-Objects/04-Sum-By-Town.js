/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function sumByTown(input) {
    let townsSum = {};
    let town, num;
    // console.log(input);
    for (let index = 0; index < input.length-1; index++) {
        // console.log(input[index]);
        if(index%2 === 0){
            // console.log(`town: ${input[index]}`);
            town = input[index];
            num = Number(input[index+1]);
            if(townsSum.hasOwnProperty(town)){
                townsSum[town] += num;
            }else{
                townsSum[town] = num;
            }
        }
    }
    console.log(JSON.stringify(townsSum));
}
/*sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);*/
/*
sumByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'sofia',
    '5',
    'varna',
    '4'
]);*/
