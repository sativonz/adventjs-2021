//import contarOvejas from "./Reto-1/index.js";
// import listGifts from "./Reto-2/index.js";
// import isValid from "./Reto-3/index.js";
// import createXmasTree from "./Reto-4/index.js";
// import daysToXmas from "./Reto-5/index.js";
// import sumPairs from "./Reto-6/index.js";
// import contains from "./Reto-7/index.js";
// import maxProfit from "./Reto-8/index.js";
// import groupBy from "./Reto-9/index.js";
// import getCoins from "./Reto-10/index.js";
//import shouldBuyFidelity from "./Reto-11/index.js";
// import wrapGifts from "./Reto-13/index.js";
import missingReindeer from "./Reto-14/index.js";

// Reto 1
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
//console.log(contarOvejas(ovejas))


// Reto 2
const carta = 'bici coche balón _playstation   bici coche peluche muñeco'
// console.log(listGifts(carta));


// Reto 3
let letter = "bici coche (balón]}{[]}) bici coche peluche";
//console.log(isValid(letter));


// Reto 4
// console.log(createXmasTree(3));


// Reto 5 
const date = new Date('Dec 25, 2021')
//daysToXmas(date) // 0
const date1 = new Date('Dec 26, 2021')
//daysToXmas(date1) // -1
const date2 = new Date('Dec 31, 2021')
//daysToXmas(date2) // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
//daysToXmas(date3) // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
//daysToXmas(date4) // -7


// Reto 6
/*console.log(sumPairs([0, 2, 2, 3], 8)); // [1, 5]
console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 10)); // [1, 5]*/


// Reto 7 
const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}         
//console.log(contains(almacen, 'camiseta')); // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
//console.log(contains(otroAlmacen, 'gameboy')); // false



//Reto 8
const pricesBtc = [1,2,3,2,1]
//console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
//console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

const pricesA = [3, 1, -5]  
//console.log(maxProfit(pricesA)); // -> 60 (compra a 10, vende a 70)


//Reto 9
//console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // { 6: [6.1, 6.3], 4: [4.2] }
//console.log(groupBy(['one', 'two', 'three', 'palmera'], 'length')); // { 3: ['one', 'two'], 5: ['three'] }
//console.log(groupBy([{age: 23}, {age: 24}], 'age')); // { 23: [{age: 23}], 24: [{age: 24}] }



// Reto 10
/*console.log(getCoins(53)) // [1, 1, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos*/



// Reto 11
//FALSE mejor comprar tickets de un solo uso
//TRUE mejor comprar el abono de fidelidad
//console.log(shouldBuyFidelity(1));
//console.log(shouldBuyFidelity(120));
//console.log(shouldBuyFidelity(2));



//Reto 13
//console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

//console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

//console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/



//Reto 14
console.log(missingReindeer([3, 2, 0])) // -> 1

console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4

//console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)

//console.log(missingReindeer([3, 0, 1])) // -> 2
//console.log(missingReindeer([9, 2, 3, 5, 1, 6, 4, 7, 0])) // -> 8
//console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)*/

console.log(missingReindeer([65, 64, 61, 60])) // -> 62