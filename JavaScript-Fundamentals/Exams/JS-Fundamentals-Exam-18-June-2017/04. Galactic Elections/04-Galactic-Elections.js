/**
 * Created by Deyan Peychev on 18-Jun-17.
 */
function solve(input) {
    let SystemCandidatesVotes = new Map();
    for (let dataRow of input) {
        let system = dataRow.system;
        let candidate = dataRow.candidate;
        let votes = Number(dataRow.votes);
        if(!SystemCandidatesVotes.has(system)){
            SystemCandidatesVotes.set(system, new Map());
            let currenSystem = SystemCandidatesVotes.get(system);
            if(!currenSystem.has(candidate)){
                currenSystem.set(candidate, votes);
            }else{
                let currentCandidateVotes = currenSystem.get(candidate);
                currenSystem.set(candidate,currentCandidateVotes+votes);
            }
        }else{
            let currenSystem = SystemCandidatesVotes.get(system);
            if(!currenSystem.has(candidate)){
                currenSystem.set(candidate, votes);
            }else{
                let currentCandidateVotes = currenSystem.get(candidate);
                currenSystem.set(candidate,currentCandidateVotes+votes);
            }
        }
        /*console.log(system);
        console.log(candidate);
        console.log(votes);*/
    }
    function sortVotes(a,b) {
        console.log(a[1]);
        let result = a[1] - b[1];
        return result;
    }
    let biggestCandidateName = '';
    let biggestCandidateVotes = 0;
    let winners = new Map();
    for (let system of [...SystemCandidatesVotes.values()]) {
        biggestCandidateName = [...system.entries()].sort((a,b) => a[1] < b[1])[0][0];
        biggestCandidateVotes = [...system.values()].reduce((a,b) => a+b);
        if(!winners.has(biggestCandidateName)){
            winners.set(biggestCandidateName, biggestCandidateVotes);
        }else{
            let currentVotes = winners.get(biggestCandidateName);
            winners.set(biggestCandidateName, currentVotes+biggestCandidateVotes);
        }
    }
    let allVotes = 0;
    for (let obj of [...SystemCandidatesVotes.values()]) {
        for (let candVote of [...obj.entries()]) {
            allVotes +=candVote[1];
        }
    }
    winners = [...winners.entries()].sort((a,b) => a[1] < b[1]);
    if(winners.length===1){
        console.log(`${winners[0][0]} wins with ${winners[0][1]} votes`);
        console.log(`${winners[0][0]} wins unopposed!`)
    }else{
        // console.log(allVotes);
        for (let candidate of winners) {
            candidate = Math.trunc(candidate[1]/allVotes*100);
        }
        let CandWithVotes = new Map();
        for (let kvp of winners) {
            if(!CandWithVotes.has(kvp[0])){
                CandWithVotes.set(kvp[0], kvp[1]);
            }else{
                let currentVotes = CandWithVotes.get(kvp[0]);
                CandWithVotes.set(kvp[0], currentVotes+kvp[1]);
            }
            kvp[1] = Math.trunc(kvp[1]/allVotes*100);
        }
        // console.log(CandWithVotes);
        let bestTwo = [winners[0], winners[1]];
        let haveMajor = false;
        let candWithMostVotes = '';
        let candVotes = 0;
        let runnerUp;
        for (let kvp of winners) {
            if(kvp[1]>50){
                candWithMostVotes = kvp[0];
                candVotes = CandWithVotes.get(candWithMostVotes);
                haveMajor = true;
            }
        }
        if(!haveMajor){
            console.log(`Runoff between ${bestTwo[0][0]} with ${bestTwo[0][1]}% and ${bestTwo[1][0]} with ${bestTwo[1][1]}%`);
        }else{
            let remainingSystems = new Map();
            for (let systemName of [...SystemCandidatesVotes.keys()]) {
                remainingSystems.set(systemName, 0);
            }
            for (let obj of [...SystemCandidatesVotes]) {
                let systemName = obj[0];
                let sum =0;
                for (let kvp of obj[1]) {
                    // console.log(kvp);
                    sum+=kvp[1];
                }
                remainingSystems.set(systemName, sum);
            }
            remainingSystems = [...remainingSystems].sort((a,b) => a[1] < b[1]);
            remainingSystems.shift();
            // console.log(remainingSystems);
            console.log(`${candWithMostVotes} wins with ${candVotes} votes`);
            console.log(`Runner up: ${winners[1][0]}`);
            for (let [systemName, votes] of remainingSystems) {
                console.log(`${systemName}: ${votes}`);
            }
        }

    }
    // console.log([...SystemCandidatesVotes.values()]);
}


solve([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]
);
/*solve([ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
    { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
    { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
);*/
/*solve([ { system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau',   candidate: 'Space Cow',     votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow',     votes: 60 },
    { system: 'Tau',   candidate: 'Flying Shrimp', votes: 150 } ]
);*/
