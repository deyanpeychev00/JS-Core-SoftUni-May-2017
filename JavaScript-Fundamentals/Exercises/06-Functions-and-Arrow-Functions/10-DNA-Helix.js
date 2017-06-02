/**
 * Created by Deyan Peychev on 31-May-17.
 */
function solve(size) {
    let dna = 'ATCGTTAGGG'.split('');
    let counterDNA = 0;

    for (let i = 0; i < size; i++) {
        if (i % 4 === 0) {
            console.log(`**${dna[counterDNA]}${dna[counterDNA + 1]}** `)
        } else if (i % 2 === 0) {
            console.log(`${dna[counterDNA]}----${dna[counterDNA +1]}`)
        } else {
            console.log(`*${dna[counterDNA]}--${dna[counterDNA +1 ]}*`);
        }
        counterDNA+=2;
        if(counterDNA>=dna.length){
            counterDNA=0;
        }
    }

}
solve(10);
