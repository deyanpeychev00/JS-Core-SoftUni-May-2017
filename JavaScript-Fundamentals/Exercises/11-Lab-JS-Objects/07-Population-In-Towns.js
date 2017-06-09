/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function countPopulation(input) {
    let population = new Map();
    for (let line of input) {
        line = line.split(' <-> ');
        let cityName = line[0];
        let cityPopulation = Number(line[1]);

        if(population.has(cityName)){
            population.set(cityName, population.get(cityName)+cityPopulation);
        }else{
            population.set(cityName, cityPopulation);
        }
    }
    for (let [key, value] of population) {
        console.log(`${key} : ${value}`);
    }
}
/*
countPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Sofia <-> 800000',
]);*/
