# Día 20 - ¿Una carta de pangramas? ¡QUÉ!

> Los niños de Laponia tienen en su clase de castellano el reto de crear una carta a Santa Claus con todas las letras del alfabeto...¡Ayuda a detectar si lo hacen bien!

Dificultad: Fácil

## Enunciado

En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir **una función** que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la `á` y la `ä` cuenta como una `a`.

Vamos a ver unos ejemplos de frases:

```js
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
```

Y ya que estás... **¿Cuál es tu pangrama favorito?** ¡Compártelo en nuestra comunidad de Discord!

## Solución 1

```js
function pangram(string) {
    // Convertimos el string a minúsculas
    string = string.toLowerCase();
    // Quitamos los acentos y dieresis del string
    string = string.replace(/[á]/g, 'a');
    string = string.replace(/[é]/g, 'e');
    string = string.replace(/[í]/g, 'i');
    string = string.replace(/[ó]/g, 'o');
    string = string.replace(/[ú]/g, 'u');
    string = string.replace(/[ü]/g, 'u');
    // Creamos un conjunto de letras del abecedario español
    const alphabet = new Set("abcdefghijklmnñopqrstuvwxyz");


    // Iteramos sobre cada caracter del string
    for (const c of string) {
      // Si el caracter es una letra del abecedario, la eliminamos del conjunto
      if (alphabet.has(c)) {
        alphabet.delete(c);
      }
    }
    // Si el conjunto está vacío, significa que el string contiene todas las letras del abecedario
    return alphabet.size == 0;
  }
```


## Solución 2

```js
function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  const ntilde = '&ntilde;';
  const letterTransformed = letter
    .toLowerCase()
    .replaceAll('ñ', ntilde)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replaceAll(ntilde, 'ñ');

  return alphabet.every((char) => letterTransformed.includes(char));
}
```

