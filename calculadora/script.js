//exibir no resultado, os numeros inseridos
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
//limpar resultado
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
//limpar um numero apenas com length -1
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
//formular para calcular atraves do (eval)
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML =  eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Sem Caracteres...";
    }
}