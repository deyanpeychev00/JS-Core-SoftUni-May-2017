/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function getInventory(input) { // array of strings
    let heroesData = [];

    for (let line of input) {
        line = line.split(' / ');
        let name = line[0];
        let level = line[1];
        let inventory = [];
        let items = [];
        if(line[2]){
          inventory = line[2];
          items = inventory.split(', ');
        }
        // console.log(name + ' | ' + level + ' | ' + inventory);
        // console.log(items);
        let hero = {
            name: name,
            level: Number(level),
            items: items
        };
        // console.log(hero);
        heroesData.push(hero);
    }
    console.log(JSON.stringify(heroesData));
}


/*getInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);*/
// getInventory(['Jake / 1000']);
