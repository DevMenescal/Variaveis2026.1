/* == Criando Variaveis == 

 ● Até então estávamos colocando os valores nas 
expressões de console;
 ● Porém isso não é tão comum no dia a dia, nós 
precisamos utilizar variáveis;
 ● Que são como containers, que salvam informações 
para quando precisamos utilizar;
 ● Temos como declarar variáveis com let e const;
 ● Vamos ver na prática!*/

 // 1 - Variáveis 

 // Variáveis LET: Recebe um valor, que pode ser alterado posteriormente no código.

 let nome = "Gustavo"

 console.log(nome);
 
 nome = "Gustavo Menescal"

 console.log(nome);

 // Variáveis CONST: Recebe um valor que não pode ser alterado posteriormente no código.

 const idade = 33

 console.log(idade);

//  idade = 34

// NÃO É PERMITIDO se iniciar uma variável com números ou caracteres especiais.

// let 2teste = "inválido"
// let @teste = "inválido"

// Para nome de variáveis, é aconselhado utilizar o modelo camel case

let nomeDoFulano = "Fulano"

const anoNascimento = 1982

console.log(anoNascimento);

// Os únicos caracteres que podemos utilizar no início dos nomes de variáveis são: o underline _ e cifrão $

let _teste = "válido"

let $teste = "válido"

console.log(_teste, $teste);

/* == Empty Values
● Temos duas palavras reservadas que pertencem a 
    este grupo de dados: undefined e null;
● Undefined geralmente é visto quando utilizamos um 
  código que ainda não foi definido;
● Já null, costuma ser imposto pelos programadores, 
  para determinar que não há ainda um valor;*/

// Declarações de variáveis com o Null e undefined

let variavelNull = null
let variavelIndefinida

console.log(variavelNull);
console.log(variavelIndefinida);

// Exemplos de uso de varáveis 

// Concatenação com Strings

let nomezito = "Severino Aurélio"

const idadecita = 78

let gostaDeProgramacao = true

let filmeFavorito = "Emanuelle"

let gameFavorito = "Dominó com os parças"

console.log("O sr(a): " + nomezito + " com a idade de: " + idadecita + " , gosta de programação? " + gostaDeProgramacao + " , diz que seu filme favorito é: " + filmeFavorito + " e seu jogo favorito é: " + gameFavorito + ".");


// Operções com as variáveis

let x = 20

let y = 30

let soma = x + y

console.log("O resultado da soma entre as variaveis x e y é: " + soma)

// Comparando variáveis

console.log(x < y);
console.log(x === y);
console.log(x !== y);


// Interpolação de variáveis

// Exemplo 1

let produto = "Maçãs"
let quantidade = 10
let precoUnitario = 2.5
let total = quantidade * precoUnitario

// Ao invés disso:

console.log("Você comprou: " + quantidade + " " + produto + " por " + total + " reais.");

// Usar isso:

console.log(`Você comprou: ${quantidade} ${produto} por ${total} reais.`);

// Exemplo 2

const animal1 = "gatos"

const animal2 = "bucicas"

let qtdGatos = 4

let qtdBucicas = 5

let totalAnimais = qtdGatos + qtdBucicas

let frase = `Minha vózinha carquética ela prefere ${animal1} do que ${animal2}, porém, ela é uma acumuladora. Possuí ${qtdGatos} gatos e ${qtdBucicas} bucicas. No total, são: ${totalAnimais} bichos!`

console.log(frase);

// Exemplo 3 - Uso do Prompt com Alert

// let nomeDoUsuario = window.prompt ("E aí feio, quem está para entrar na Matrix? Pode me dizer seu nome?")

// window.alert(`Opa, é você então meu caro amigo ${nomeDoUsuario}, pode prosseguir!`)

// CONVERTENDO VALORES DE UMA VARIÁVEL

// DE UMA STRING PARA NUMEROS

// Usando o parseInt() para número inteiros

let stringNumero = "42"
let numero = parseInt(stringNumero)

console.log(stringNumero);
console.log(numero);

// Usando o parseFloat() para números de ponto flutuante

let stringNumeroQuebrado = "3.14"
let numeroQuebrado = parseFloat(stringNumeroQuebrado)
console.log(numeroQuebrado);

// Usando Number() mais recomendado
let stringNumero22 = "22"
let numero22 = Number(stringNumero22)
console.log(numero22);

// Usando o operador + antes do nome da variável

let stringNumero1 = "1991"
let numeroConvertido = +stringNumero1

console.log(numeroConvertido);

// Convertendo de Número para String

// Usando o toString()

let numero666 = 666
let srtigNumero666 = numero666.toString()
console.log(srtigNumero666);

// Usando o String() mais recomendada

let numero33 = 33
let stringNumero33 = String(numero33)
console.log(stringNumero33);

/* CONHECENDO ESTRUTURAS CONDICIONAIS

 ● Os programas são executados de cima para baixo;
 ● Com estas estruturas podemos alterar o fluxo de 
execução;
 ● O caminho dependerá das condições e 
comparações;*/

// Usando IF

/*if: Executa um bloco de código se uma condição for verdadeira.

   SINTAXE: if (condição) {} */


// Exemplo 01

let idadeMaria = 71

let idadeJoao = 63

if (idadeMaria > idadeJoao){
    console.log("Exemplo 1 IF: Ih rapaz, a Maria é mais velha que o João."); 
}

// Exemplo 02

let usuario = "Josivaldo"

if (usuario === "Josivaldo") {
    console.log(`Fala meu camarada ${usuario}, seu bicho de chifre!`);
    
}

// Usando Else If

// Else if: Adciona uma nova condição caso a anterior seja falsa.

/* SINTAXE:
if (condicao) {
}
else if (nova condicao){} */

// Exemplo 01

let logadoTikTok = false

if (logadoTikTok === true){
    console.log("Bem vindo meu caro desocupado.");
}
else if (logadoTikTok === false){
    console.log("Até que enfim, foi lavar os pratos.");   
}

// Exemplo 2

let nomeUser = "Conceição"

if (nomeUser === "Rita"){
    console.log("Seja bem Vinda Rita.");
}
else if (nomeUser === "Maria"){
    console.log("Seja bem Vinda Maria.");
}
else if (nomeUser === "Conceição"){
    console.log("Seja bem Vinda Conceição.");
}

// Usando o Else
/*Else: Executa o um bloco de código se todas as condições anteriores forem falsas.
SINTAXE:
if (condição){
}
else if (condição){
}
else if (condição){
}
else {}
*/

// Exemplo 01

let corEscolha = "preta"

if (corEscolha === "branca"){
    console.log("Ótima escolha, seu possante será branco!");
}
else if (corEscolha === "vermelha"){
    console.log("Caraca, seu carango vai ser vermelho!");
}
else{
    console.log("Só temos duas cores disponíveis, Branca e Vermelha.");
    
}


// Exemplo 02

let idadeUsuario = 37

if (idadeUsuario <= 17){
    console.log("Esse site não permitido o acesso por menores de idade.");
}
else if (idadeUsuario === 18){
    console.log("Juízo meu nobre!");
}
else if (idadeUsuario >= 90){
    console.log("Olha a aposentadoria!");
}
else {
    console.log("Boa diversão.");
    
}