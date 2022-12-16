# Día 4 - ¡Es hora de poner la navidad en casa!

> Creo que ya podemos sacar el gorro navideño, el turrón... ¡Y el árbol de navidad! 🎄 Vamos a montarlo con JavaScript.

Dificultad: Normal

## Enunciado

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento `5`, se pintaría esto:

```js
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteriscos `*` con la altura proporcionada y, a los lados, usamos el guión bajo `_` para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de `#`.

Otro ejemplo con un árbol de altura `3`:

```js
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea `\n` para cada línea para que se forme bien el árbol.

## Solución

```js
export default function createXmasTree(altura) {
    let tallo = "#";
    let arbol = "";
    // Bucle para recorrer la altura del árbol
    for (let i = 0; i < altura; i++) {
        let espacios = "_".repeat(altura - i - 1);
        let asteriscos = "*".repeat(2 * i + 1);
        arbol += espacios + asteriscos + espacios + "\n";
    }
    arbol += "_".repeat(altura - 1) + tallo + "_".repeat(altura - 1);
    arbol += "\n"+"_".repeat(altura - 1) + tallo + "_".repeat(altura - 1);
    return arbol;
}
```
