const odj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
}

function  IterationFunc(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            console.log(key)
    }
}
IterationFunc(odj)