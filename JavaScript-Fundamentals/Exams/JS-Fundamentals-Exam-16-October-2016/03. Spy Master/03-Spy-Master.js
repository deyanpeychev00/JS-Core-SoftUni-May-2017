function spyMaster(input){
    let specialKey = input.shift();
    let regex = new RegExp(`(^|\\s)(${specialKey}\\s+)([!#$%A-Z]{8,})(\\.|,|\\s|$)`, 'gi');
    // console.log(regex);
    for (let index = 0; index < input.length; index++) {
        let match;
        while(match = regex.exec(input[index])){
            let word = match[3];
            if(word.toUpperCase() === word && word.length>=8){
                word = decode(word);
                let decodedMatch = match[1]+match[2]+word+match[4];
                input[index] = input[index].replace(match[0], decodedMatch);
            }
        }

    }
    function decode(word) {
        word = word.replace(/\!/g, 1)
            .replace(/\%/g, 2)
            .replace(/\#/g,3)
            .replace(/\$/g,4);
        return word.toLowerCase();
    }
    console.log(input.join('\n'));
}
spyMaster([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);