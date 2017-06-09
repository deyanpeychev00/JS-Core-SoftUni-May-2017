/**
 * Created by Deyan Peychev on 08-Jun-17.
 */
function townsToJSON(input) {
    input.shift();
    let townsObj = [];

    for (let line of input) {
        // console.log(line);
        let tokens = line.split('|').filter(el => el!=='').map(el => el.trim());
        // console.log(tokens);

        let town = {
            Town: tokens[0],
            Latitude: Number(tokens[1]),
            Longitude: Number(tokens[2])
        };

        townsObj.push(town);
    }
    console.log(JSON.stringify(townsObj));
}
/*
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);*/
