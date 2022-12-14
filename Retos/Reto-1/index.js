export default function contarOvejas(ovejas){
    return ovejas.filter(({ name, color }) => {
        if (name.toLowerCase().includes("n") && name.toLowerCase().includes("a")) return color ==  "rojo";
    }
  )
}

