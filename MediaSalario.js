
var func = function(){
    var nome
    var salario

    this.setNome = function(nome){
        this.nome = nome
    }
    this.setSal = function(salario){
        this.salario = salario
    }
    this.getNome = function(){
        return this.nome
    }
    this.getSal = function(){
        return this.salario
    }
}

var funcionario = []

for (let i = 0; i < 5; i++){
    if (i == 0){
        funcionario[i] = new func()
        funcionario[i].setNome("João")
        funcionario[i].setSal(1000)
    }else if(i == 1){
        funcionario[i] = new func()
        funcionario[i].setNome("Maria")
        funcionario[i].setSal(2000)
    }else if (i == 2){
        funcionario[i] = new func()
        funcionario[i].setNome("Pedro")
        funcionario[i].setSal(3000)
    }else if (i == 3){
        funcionario[i] = new func()
        funcionario[i].setNome("Ana")
        funcionario[i].setSal(4000)
    }
}

const media = function(){
    var total = 0;
    for (let i = 0; i < 4; i++){
        total += funcionario[i].getSal()
    }
    return total / funcionario.length
}

console.log(media())
