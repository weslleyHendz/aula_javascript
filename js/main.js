
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
        //console.log (document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar (){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://globallabs.academy/"

}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    
    elemento.innerHTML = "Passe o mouse aqui";
} 
function load(){
    alert("página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);

}

/*function soma(n1, n2){
    return n1+n2;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true; 
    } else{
        validar = false;
    }
    return validar;
}
var idade = prompt ("Qual sua idade")
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));

    /*
var d = new Date();
alert(d.getDay());
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/
/*
var count = 0   ;
while (count < 5){
    console.log(count);
    count = count + 1;
}
*/
/*
var idade = prompt("Qual sua idade")
if(idade>=18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/
/*
var fruta = {nome:"maça", cor: "vermelha"};
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva")
//lista.pop();

//console.group(lista.);


//var name=" Weslley Hendz";
//var idade= 29;
//var idade2= 10
//var frase = "Japão é o melhor time do mundo";

// alert(name + " tem" +idade+" anos");

//console.log(name);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão", "Brasil"));

