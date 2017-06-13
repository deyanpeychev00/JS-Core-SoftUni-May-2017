/**
 * Created by Deyan Peychev on 13-Jun-17.
 */
function airport(input) {
    let airport = new Map();
    let townStatistics = new Map();
    let townPlanes = new Map();

    function sortTowns(a,b) {
        let aArrivals = a[1][0];
        let bArrivals = b[1][0];
        let firstCriteria = bArrivals-aArrivals;
        if(firstCriteria!==0){
            return firstCriteria;
        }else{
            return a[0].localeCompare(b[0]);
        }
    }

    for (let line of input) {
        [planeID, town, passengersCount, action] = line.split(' ');
        passengersCount = Number(passengersCount);

        if(action === 'land'){
            if (airport.has(planeID)){
                continue;
            }else{
                airport.set(planeID, 'land');
            }
            if (!townStatistics.has(town)){
                townStatistics.set(town, [0,0]);
            }
            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }
            townStatistics.get(town)[0] += passengersCount;
            townPlanes.get(town).add(planeID);
        }else{
            if(airport.has(planeID)){
                airport.delete(planeID);
            }else{
                continue;
            }
            if (!townStatistics.has(town)){
                townStatistics.set(town, [0,0]);
            }
            if(!townPlanes.has(town)){
                townPlanes.set(town, new Set());
            }
            townStatistics.get(town)[1] +=passengersCount;
            townPlanes.get(town).add(planeID);
        }

    }
    let sortedAirport = [...airport.entries()].sort((a,b) => a[0].localeCompare(b[0]));
    console.log('Planes left:');
    for (let planes of sortedAirport) {
        console.log(`- ${planes[0]}`);
    }
    let sortedTowns = [...townStatistics.entries()].sort(sortTowns);
    for (let [town, statistics] of sortedTowns) {
        console.log(town);
        console.log(`Arrivals: ${statistics[0]}`);
        console.log(`Departures: ${statistics[1]}`);
        let sortedPlanes = [...townPlanes.get(town).values()].sort((a,b) => a.localeCompare(b));
        console.log('Planes:');
        for (let plane of sortedPlanes) {
            console.log(`-- ${plane}`);
        }
    }
}
// airport([  "Boeing474 Madrid 300 land",  "AirForceOne WashingtonDC 178 land",  "Airbus London 265 depart",  "ATR72 WashingtonDC 272 land",  "ATR72 Madrid 135 depart" ]);
// airport([  "Airbus Paris 356 land",  "Airbus London 321 land",  "Airbus Paris 213 depart",  "Airbus Ljubljana 250 land" ] );