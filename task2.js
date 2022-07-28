const odj = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
}
function IterationFunc(string, obj) {
    return !!obj[string];

}
a = IterationFunc('a', odj)
console.log(a)