console.log("hello world")

const add = (a: number, b: number) => {
    return a + b
}

const sum = add(2,3)
//Boolean
let muted:boolean  = true
muted = false
// muted = "callado"

//Números
//let age =  "6"// esta edad de "6" es un sttring por lo cual no voy a poder utilizarlo en operaciones con números
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

//String
let nombre: string = "Daniel"
let saludo = `Hola, mi nombre es ${nombre}`

//Arreglos, en JS podemos hacer arreglos que pueden contener cualquier tipo de dato sin ningún problema, en TS podemos limitar los arreglos a que solo contengan los tipos de datos que nosotros decidimos.

let people: string[] = ["Daniel", "Jesus", "victor"]
// people.push(9000)
people.push("9000")

let peopleAndNumber: Array< string | number > = []
peopleAndNumber.push("Ricardo")
peopleAndNumber.push(9001)
//Enum
enum Color {//enum, son un conjunto de valores, indica "los que son", solo podremos asignar los valores que definamos
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color = Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)
//Any, nos permite que una variable que declaremos pueda luego tomar cualquier tipo, podría pasar de ser un string, un número o hasta un ojeto

let comodin: any = "Joker"
comodin = {
    type: "Wildcard"
}

//Object 
let someObjet: object = {
    nobre: "Daniel"
}