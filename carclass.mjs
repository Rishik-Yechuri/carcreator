export default class carclass {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model
        this.speed = speed
        this.milesIn = 0
    }
    getBrand(){
        return this.brand
    }
    getModel(){
        return this.model
    }

    getSpeed(){
        return this.speed
    }

    drive(howManyMinutes){
        this.milesIn += (howManyMinutes/60) * this.speed
    }
    getLocation(){
        return this.milesIn
    }
}