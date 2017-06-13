/**
 * Created by Deyan Peychev on 13-Jun-17.
 */
function buildAWall(input) {
    input = input.map(Number);
    let concrete = 195;
    let concreteUsed = [];
    input = input.filter(e => e !== 30);

    while (input.length !== 0){
        let concretePerDay = 0;
        for (let i = 0; i < input.length; i++) {

            input[i]++;
            concretePerDay +=concrete
        }
        concreteUsed.push(concretePerDay);
        input = input.filter(e => e !== 30);
    }
    console.log(concreteUsed.join(', '));
    let allConcrete = concreteUsed.reduce((a,b) => a+b);
    console.log(allConcrete*1900 + ' pesos');
}
// buildAWall([17, 22, 17, 19, 17]);