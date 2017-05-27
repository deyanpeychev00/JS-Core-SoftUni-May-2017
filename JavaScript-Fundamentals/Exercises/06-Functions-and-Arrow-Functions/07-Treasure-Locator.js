/**
 * Created by Deyan Peychev on 28-May-17.
 */
function solve(args) {
    let Tokelau = {
        x1: 8,
        x2: 9,
        y1: 0,
        y2: 1
    };
    let Tuvalu = {
        x1: 1,
        x2: 3,
        y1: 1,
        y2: 3
    };
    let Samoa = {
        x1: 5,
        x2: 7,
        y1: 3,
        y2: 6
    };
    let Tonga = {
        x1: 0,
        x2: 2,
        y1: 6,
        y2: 8
    };
    let Cook = {
        x1: 4,
        x2: 9,
        y1: 7,
        y2: 8
    };

    function isOnIsland(X,Y,island) {
        return (X >= island.x1 && X <= island.x2) && (Y >= island.y1 && Y <= island.y2);
    }

    for (let i = 0; i < args.length; i+=2) {
        let X = args[i],
            Y = args[i+1];

        if (isOnIsland(X,Y,Tokelau)){
            console.log('Tokelau');
        }else if(isOnIsland(X,Y,Tuvalu)){
            console.log('Tuvalu');
        }else if(isOnIsland(X,Y,Samoa)){
            console.log('Samoa');
        }else if(isOnIsland(X,Y, Tonga)){
            console.log('Tonga');
        }else if(isOnIsland(X,Y,Cook)){
            console.log('Cook');
        }else{
            console.log('On the bottom of the ocean');
        }
    }
}

solve([4, 2, 1.5, 6.5, 1, 3]);
solve([6, 4]);