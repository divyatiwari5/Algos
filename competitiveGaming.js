function competitiveGaming(scores, minRank) {

    const sorted = scores.sort(function( a, b ) { return a - b }).reverse();

    let rank=0;
    let qualified = 0;

    const securedRanks = [];

    for(var i=0; i<sorted.length; i++) {
        if (i===0) {
            rank = securedRanks.length+1;
        } else if(sorted[i] === sorted[i-1]) {
            rank = rank;
        } else {
            rank=securedRanks.length+1;
        }
        securedRanks.push(rank);

        if (rank <= minRank) {
            qualified += 1;
        }
    }
    console.log({securedRanks});
    console.log(qualified);
}

const scores = [10, 100, 50, 50, 25, 25, 5];
const minRank = 5;

competitiveGaming(scores, minRank);