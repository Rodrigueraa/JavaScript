function rand({min, max}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const num = {min: 0, max: 51}

console.log(rand(num))
