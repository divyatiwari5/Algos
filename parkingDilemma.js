function parkingDilemma(cars, carsToBeCovered) {
    const sorted = cars.sort(function(a, b) { return  a - b });

    const possibleRoofs = [];

    let minimumRoofLength = 0;

    for (var i=0; i<sorted.length; i++) {
        let array = [];
        array.push(sorted[i]);
        for (var j=i+1; j<sorted.length; j++) {
            if(array.length < carsToBeCovered) {
                array.push(sorted[j]);
            }
        }
        if(array.length===carsToBeCovered) {
            possibleRoofs.push(array);
        }
    }
    console.log(possibleRoofs);

    for (var i=0; i< possibleRoofs.length; i++) {
        if (i===0) {
            minimumRoofLength = (possibleRoofs[i][carsToBeCovered-1] - possibleRoofs[i][0]) + 1;
        } else {
            minimumRoofLength = Math.min(minimumRoofLength, (possibleRoofs[i][carsToBeCovered-1] - possibleRoofs[i][0]) + 1);
        }
    }

    console.log(minimumRoofLength);

}

function parkingDilemma2(cars, carsToBeCovered) {
    let k = carsToBeCovered;
    const sorted = cars.sort(function(a, b) { return  a - b });
    const possibleRoofs = [];

    let minimumRoofLength = Infinity;

    console.log({sorted});

    for(var i=0; i<sorted.length - k; i++ ) {
        let firstcarpos = sorted[i];
        let lastcarpos = sorted[i+k-1];
        console.log({firstcarpos}, {lastcarpos});

        let currRoofLenght = lastcarpos - firstcarpos + 1;
        if (currRoofLenght < minimumRoofLength) {
            minimumRoofLength = currRoofLenght;
        }
    }

    console.log(minimumRoofLength);
}

cars = [2, 6, 12, 7];
carsToBeCovered = 3;

parkingDilemma2(cars, carsToBeCovered)