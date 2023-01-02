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

function parOuImpar({min= 1, max= 20}){
    var numero = Math.floor(Math.random() * (max - min))
    if (numero % 2 === 0){
        console.log(numero)
        return true
    }
    console.log(numero)
    return false
}

console.log(parOuImpar({min: 1, max: 21}) ? "Par" : "Impar")
