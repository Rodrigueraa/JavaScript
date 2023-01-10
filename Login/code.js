
function logar(){

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    try{
        if(user == 'admin' && password == 'admin'){
            alert('Sucesso');
        } else return e
    } catch(e){
        if (user || password == ''){
            alert('Preencha todos os campos');
        }  
    }

}