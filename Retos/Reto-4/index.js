export default function createXmasTree(altura) {
    if (altura > 100){
        return alert("La altura debe ser menor o igual que 100");
    }
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
