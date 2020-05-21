import readline from 'readline'
import car from './carclass.mjs'
var input = ""
var questionToAsk = ""
var r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const question1 = () => {
    return new Promise((resolve, reject) => {
        r1.question(questionToAsk, (answer) => {
            input = answer
            resolve()
        })
    })
}
const main = async () => {
    console.log("What is the Brand?")
    await question1()
    var brandName = input
    console.log("What is the Model?")
    await question1()
    var modelName = input
    console.log("What is the Speed?")
    await question1()
    var carSpeed = input
    var newCar = new car(brandName,modelName,carSpeed)
    var keepGoing = true;
    while(keepGoing){
        await question1()
        if(input === 'get brand'){
            console.log(newCar.getBrand())
        }else if(input === 'get name'){
            console.log(newCar.getModel())
        }else if(input === 'get speed'){
            console.log(newCar.getSpeed())
        }else if(input.split(" ")[0] === 'drive'){
            newCar.drive(parseInt(input.split(" ")[1]));
        }else if(input === 'get location'){
            console.log(newCar.getLocation())
        }else if(input === 'end'){
            keepGoing = false
        }
    }
    r1.close()
}
main()
