export default function missingReindeer(renos){
    renos.sort();
    let index = renos[0],
        falta;
    renos.forEach(e => {
        if(e != index ){
           falta = index;
           return true
        }
        index++
    });
    return renos.length == index ? index : falta;
}