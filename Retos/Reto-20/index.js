export default function pangram(string) {
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