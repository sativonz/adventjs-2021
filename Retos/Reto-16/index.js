export default function decodeNumbers(symbols){

    let mapa = {
       ".": 1,
       ",": 5,
       ":": 10,
       ";": 50,
       "!": 100,
    }
    
    return  symbols
    .split("")
    .map(symbol => mapa[symbol] || NaN)
    .reduce((result, value, index, array) =>
        result + (value < array[index + 1] ? -value : value),
      0
    );
}