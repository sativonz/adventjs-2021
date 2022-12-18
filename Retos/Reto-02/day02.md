# Día 2 - ¡Ayuda al elfo a listar los regalos!

> ¡Menudo lío 😵! Un elfo está ayudando a Santa Claus. Pensaba que le vendría ya ordenado de cada regalo cuantas unidades debe conseguir... ¡y le ha llegado una carta ✉️! ¡Ayúdale!

Dificultad: Fácil

## Enunciado

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque **ten cuidado**, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un `_` delante de la palabra, por ejemplo `_playstation`, que significa que **está tachado y no se tiene que contar**.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```js
const carta = 'bici coche balón _playstation bici coche peluche'
```

Al ejecutar el método debería devolver lo siguiente:

```js
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 **¡Cuidado con contar espacios vacíos!**


## Solución 

```js
function listGifts(carta) {
  let regalos = carta.match(/\b[0-9-_a-zA-ZÀ-ÿu00f1u00d1a-zA-ZÀ-ÿu00f1u00d1]+\b/g);
  regalos = regalos.filter(regalo => !regalo.startsWith("_"));
  const counts = regalos.reduce((acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1
    }), {});
    return counts;
}

```


