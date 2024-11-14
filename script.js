console.log("Olá")

// ----- Aula Loops JS -----

// for
for(let i = 1; i <= 5; i++){
    console.log("Bom dia!")
}

for(let i = 2; i <= 10; i += 2){
    console.log(i)
}

// while

let iphone = 1

while(iphone <= 16){
    console.log(iphone)
    iphone++
}

let i = 5
while(i > 0){
    console.log(i)
    i--
}

// ----- Operadores lógicos -----

// &&
// ||

let login = "dry"
let senha = 1234

if(login == "dry" && senha == 1234){
    console.log("Liberado")
}else{
    console.log("Negado!")
}

let membrosDoRpg = false
let temConvite = true

if(membrosDoRpg || temConvite){
    console.log("Acesso permitido!")
}else{
    console.log("Acesso Negado!")
}

// ----- Operadores de atribuição -----
 
// + (Adição)
// - (Subtração)
// * (Multiplicação)
// / (Divisão)
console.log(2 + 3) // Só mudar o sinal dentro do parênteses!

// ++
// --
let numero = 1
console.log(++numero)

