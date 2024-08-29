// function minhaFuncao(){
//     console.log("Teste")
// }

// minhaFuncao()

// const minhaFuncaoEmVariavel = function () {
//     console.log("Função em variável")
// }

// minhaFuncaoEmVariavel()

// // Arrow function
// const testeArrow = () => {
//     console.log("Esta é uma arrow function")
// }

// testeArrow()

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par")
//         return
//     }
//     console.log("Impar")
// }

// parOuImpar(4)

// const elevaAoQuadrado = (x) => x * x

// console.log(elevaAoQuadrado(4))

// // closure

// function someFunction() {
//     let txt = "Alguma coisa"

//     function display(){
//         console.log(txt)
//     }

//     display()
// }

// someFunction()

// recursão
const untilten = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar")
    } else {
        const x = n - m
        console.log(x)
        untilten(x, m)
    }
}

untilten(100, 7)

function factorial(x){
    if(x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const n = 6
const result = factorial(n)

console.log(`Result ${result}`)