//Using Destructig in object's level

//Using Destructig in object's level
function rand({min, max}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const num = {min: 0, max: 51}
console.log(rand(num))


//Using Destructig in array's level
function rand({min = 0, max = 51}){
    if (min > max) [max, min] = [min, max]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const num = {min: 0, max: 51}
console.log(rand(num))

