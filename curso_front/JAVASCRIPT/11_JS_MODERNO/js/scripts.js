// filter

// const arr = [1, 2, 3, 4, 5, 6]
// const highNumbers = arr.filter((n) => {
//     if(n >= 3) {
//         return n
//     }
// })

// console.log(highNumbers)

// const users = [
//     {name: "Caio", avaialable: true},
//     {name: "Malu", avaialable: false},
//     {name: "Luis", avaialable: false},
//     {name: "Bernardo", avaialable: true},
// ]

// const avaialableUsers = users.filter((user) =>  user.avaialable)

// console.log(avaialableUsers)

// map 
// const products = [
//     {name: "Camisa", pice: 10.99, category: "Roupas"},
//     {name: "Chaleira Elétrica", pice: 150, category: "Eletro"},
//     {name: "Fogão", pice: 499, category: "Eletro"},
//     {name: "Calça Jeans", pice: 87.99, category: "Roupas"},
// ]

// products.map((product) => {
//     if(product.category === "Roupas"){
//         product.onSale = true
//     }
// })

// console.log(products)

// Destructuring
// const fruits = ["Maçã", "Mamão", "Laranja"]

// const [f1, f2, f3] = fruits

// console.log(f1, f3)

// const productDatails = {
//     name: "Mouse",
//     price: 39.99,
//     category: "Periférico",
//     color: "Cinza"
// }

// spread operator
// const a1 = [1, 2, 3]
// const a2 = [4, 5, 6]

// const a3 = [...a1, ...a2]

// console.log(a3)

// const a4 = [0, ...a3, 7]
// console.log(a4)

// 8 - classes

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola V', 20)
console.log(shirt)

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))


// herança
class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores são: ')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, ['Preto', 'Amarelo', 'Verde'])

console.log(hat)

console.log(hat.name)

hat.showColors()
