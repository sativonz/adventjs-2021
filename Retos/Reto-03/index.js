export default function isValid(letter) {
    return /^[^\{\[\(\)]*\([^\{\[\(\)]+\)+.*/g.test(letter);
   }