function electrAppliance(categoryName, included, power) {
    this.categoryName = categoryName
    this.included = included
    this.power = power
}

function Lamp(lampClass, color) {
    this.lampClass = lampClass
    this.color = color
    this.getInfo = function (){
        console.log(this)
    }
}
function Computer(brandName, memory) {
    this.brandName = brandName
    this.memory = memory
    this.getInfo = function () {
        console.log(this)
    }
}

function Toaster(brandName, color) {
    this.brandName = brandName
    this.color = color
    this.getInfo = function (){
        console.log(this)
    }
}

Lamp.prototype = new electrAppliance('Lamp', true, 250)
const lamp = new Lamp('desktop', 'blue')

Computer.prototype = new electrAppliance('Computer', false, 400)
const computer = new Computer('Asus', 2000)

Toaster.prototype = new electrAppliance('Toaster', true, 100)
const toaster = new Toaster('Xiaomi', 'white')

lamp.getInfo()
computer.getInfo()
toaster.getInfo()
