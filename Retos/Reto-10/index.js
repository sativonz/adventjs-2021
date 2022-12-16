export default function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50];
    let result = [];
  
    for (let i = coins.length - 1; i >= 0; i--) {
      const numCoins = change / coins[i];
      result.unshift(Math.floor(numCoins));
      change = change % coins[i];
    }
  
    return result;
  }
