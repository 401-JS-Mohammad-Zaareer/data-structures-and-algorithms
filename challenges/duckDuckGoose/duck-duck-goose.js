'use strict';

function DuckDuckGoose(list, k) {
    let current = 0;
    let counts;
    for(let iteration=1; iteration<list.length; iteration++) {
        counts = 1;
        while(counts<=k) {
            if(list[current] !== '_') {
                if(counts == k) {
                    list[current] = '_';
                }
                counts++;
            }
            if((current+1) > (list.length - 1)) {
                current = 0;
            } else {
                current++;
            }
        }
    }

    for(let i=0; i<list.length; i++) {
        if(list[i] !== '_'){
            return list[i];
        }
    }
}

console.log(DuckDuckGoose(['D', 'E'], 1));