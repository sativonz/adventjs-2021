export default function shouldBuyFidelity(times) {
  let priceMovie = 12,
    normalPass = priceMovie * times,
    discount = priceMovie * 0.75,
    fidelityPass = 250 + (discount * times);

    return fidelityPass < normalPass ? true : false
}
