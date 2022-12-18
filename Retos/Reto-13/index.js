export default function wrapping(gifts) {
    
  return gifts.map((gift) => {
    let wrapped = "*".repeat(gift.length + 2);
    return `${wrapped} \n *${gift}* \n ${wrapped}`;
  });
}


