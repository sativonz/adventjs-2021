export default function listGifts(carta) {
    let regalos = carta.match(/\b[0-9-_a-zA-ZÀ-ÿu00f1u00d1a-zA-ZÀ-ÿu00f1u00d1]+\b/g);
    regalos = regalos.filter(regalo => !regalo.startsWith("_"));
    const counts = regalos.reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
     }), {});
     return counts;
}