// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

// 3 - propriedades
const numbers = [5, 6, 7]

console.log(numbers.length)

// 3 - métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

// 5 - objetos
const person ={
    name: "caio",
    age: 20,
    job: "Programador"
}

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 ={
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))

9 - Mutação
const a = {
    name: "Caio"
}

const b = a
console.log(a)
console.log(b)

console.log(a === b)

a.age = 20
console.log(a)
console.log(b)

delete b.age
console.log(a)
console.log(b)

// 10 - loop em array
const users = ["Caio", "João", "Pedro", "Miguel"]

for (let index = 0; index < users.length; index++) {
    console.log(`Usuário: ${users[index]}`)
}

// 11 - push e pop
const array = ["a", "b", "c"]

array.push("d")
array.pop()
console.log(array)

// 12 - shift e unshift

const letters = ["a", "b", "c"]

const letter = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift("p", "q", "r")

letters.unshift("z")

console.log(letters)

// 13 - indexOf e lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])
console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))

console.log(myElements.indexOf("Mamao"))

14 - slice
const testeSlice = ["a", "b", "c", "d","e", "f"]

const subArray = testeSlice.slice(2, 4)

console.log(subArray)
console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)

// const subArray3 = teste.slice(10, 20)
// console.log(subArray3)

const subArray4 = testeSlice.slice(2)
console.log(subArray4)

15 - forEach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro Post", category: 'PHP'},
    {title: "Segundo Post", category: 'Java'},
    {title: "Terceiro Post", category: 'Python'}
]

posts.forEach((post) =>{
    console.log(`Exibindo post: ${post.title} da categoria: ${post.category}`)
})

// 16 - includes
const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))

console.log(brands.includes("aaa"))

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW!")
}

18 - trim

const trimTest = " testando \n"
console.log(trimTest)
console.log(trimTest.trim())

// 19 - padstart e padend
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0")
console.log(testePadEnd)

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")
console.log(arrayDaFrase)

// 21 - join
const fraseDenovo = arrayDaFrase.join(" ")
console.log(fraseDenovo)


const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// 22 - repeat 
const palavra = "Testando "
console.log(palavra.repeat(5))

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total
}

console.log(somaInfinita(1,2,3))
console.log(somaInfinita(1,4,543,4232,3142,13241))

// 24 - for of
const somaInfinita2 = (...args) => {
    let total = 0
    for(num of args){
        total += num
    }
    return total
}

console.log(somaInfinita2(1,2,34,4))

// 25 - destructuring em objetos
const userDetails = {
    firstName: "Caio",
    lastName: "Bertoldo",
    job: "Programador",
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// renomear variáveis
const {firstName: primeiroNome} = userDetails
console.log(firstName)

// 26 - destructuring com arrays
const myList = ["Avião", "Submarino", "Carro"]
const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON

const myJson = '{"name": "Caio", "age": 20}'

console.log(myJson)
console.log(typeof myJson)

// 28 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson)

console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)