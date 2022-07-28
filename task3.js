function Empty() {
    return Object.create(null,  {})
}
newObj = Empty()
console.log(newObj.constructor)