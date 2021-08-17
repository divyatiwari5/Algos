function trip(trips) {

    const unique = [... new Set(trips)];

    let minimum = trips.length-1;

    for (var i=0; i<trips.length-(unique.length-1); i++) {
        let sub = [];
        sub.push(trips[i]);
        for(var j=i+1; j<trips.length; j++) {
            var allFounded =  unique.every(v => sub.includes(v));
            if(!allFounded) {
                sub.push(trips[j]);
            }
        }

        console.log({
            sub
        });

        if (allFounded) minimum = Math.min(minimum, sub.length);

    }
    console.log({minimum});
}

trips = [2,1,1,3,2,1,1,2,3];

trip(trips);