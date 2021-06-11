function mostrarMensagem(){
    //alert("Obirgado por clicar!")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    console.log(document.getElementById("agradecimento"))
}

function redirecionar(){
    window.open("https://github.com/")
    //window.location.href = "https://github.com/"
}

function trocar_texto(elemento){
    elemento.innerHTML = "Usando o innerHtml como o proprio parametro"
    //document.getElementById("mouse_move").innerHTML = "Novo texto"
    //alert("Texto alterado!")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mouse_move").innerHTML = "<b>Obrigado por clicar!</b>"
    //alert("Texto alterado!")
}

function load(){
    alert("Pagina Carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

//funçoes
/*function soma(n1,n2){
   return alert(n1+n2);
}
soma(5,10);

function validaIdade(idade){
    if(idade >= 18){
        alert("Maior de idade!");
    }else{
        alert("Menor de idade!");
    }
}

idade = prompt("Qual a sua idade?");
validaIdade(idade);
*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japao", "Japao", "Brasil"));*/


/*var date = new Date();
alert(date)
alert(date.getDay());
alert(date.getMonth()+1);
alert(date.getHours()); 
*/

/*var nome = "Victor Duarte";
var idade = 20;
var idade2 = 10;
var frase = "Japao é o melhor time do mundo!"
alert(nome+" tem "+idade+" anos!");
for(var i = 0; i <= 5; i++){
    idade2++;
    alert(idade2);
    if(idade2 == 15){
        alert("Novo valor da idade 2: "+idade2);
    }
}*/

/*for(var i = 0; i <= 4; i++){
    idade2++;
    console.log(idade2);
    if(idade2 == 15){
        console.log("Novo valor da idade 2: "+idade2);
    }
}*/

/*console.log(frase.replace("Japao", "Brasil"));
alert(frase.replace("Japao", "Brasil"));
console.log(frase.toUpperCase());*/

/*var lista = ['Maçã', 'Pera', 'Laranja', 'Tomate'];
lista.push("Uva");
lista.pop("Uva");
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));*/

/*var fruta = [
    {nome: "maçã", cor: "vermelho"}, 
    {nome: "uva", cor: "roxa"}, 
    {nome: "banana", cor: "amarelo"}]
console.log(fruta.cor);
console.log(fruta.nome);*/

/*var idade = prompt("Qual a sua idade?")
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}*/

/*var count = 0;
while(count <= 5){
    alert(count);
    count++;
}*/

/*
for(i = 0; i <= 5; i++){
    alert(i);
}
*/