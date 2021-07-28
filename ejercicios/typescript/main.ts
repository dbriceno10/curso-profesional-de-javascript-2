console.log("hello world")
//Funciones
const add = (a: number, b: number): number => {
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

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlust6 = addFour(6)

function fullName (firstName: string = "Name", lastName?: string) {
    return `${firstName} ${lastName}`
}//Con el signo de interrgación en el argumento estamos permitiendo que el mismo pueda ser opcional, ya que puede ser un string o el valor undefined, tambien se le puede hacer tener un valor por defecto en caso de no agregarlo simplemente asignando un valor

const daniel = fullName('Daniel')