class ElectrAppliance {
constructor(categoryName, included, power) {
    this.categoryName = categoryName
    this.included = included
    this.power = power
}
}
class Lamp extends ElectrAppliance{
    constructor(lampClass, color, categoryName, included, power) {
        super(categoryName, included, power)
        this.lampClass = lampClass
        this.color = color
        this.getInfo = function () {
            console.log(this)
        }
    }
}
class Computer extends ElectrAppliance{
    constructor(brandName, memory, categoryName, included, power) {
        super(categoryName, included, power)
        this.brandName = brandName
        this.memory = memory
        this.getInfo = function () {
            console.log(this)
        }
    }
}
class Toaster extends ElectrAppliance{
    constructor(brandName, color, categoryName, included, power) {
        super(categoryName, included, power)
        this.brandName = brandName
        this.color = color
        this.getInfo = function () {
            console.log(this)
        }
    }
}
const lamp = new Lamp('desktop', 'blue', 'Lamp', true, 250)
const computer = new Computer('Asus', 2000, 'Computer', false, 400)
const toaster = new Toaster('Xiaomi', 'white', 'Toaster', true, 100)


console.log(lamp)
console.log(computer)
console.log(toaster)