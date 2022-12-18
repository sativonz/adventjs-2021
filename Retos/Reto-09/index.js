export default function groupBy(collection, it) {
  let result = {};

  collection.forEach(item => {
    let groupKey = typeof it === 'function' ? it(item) : item[it];
    if (!result[groupKey]) {
      result[groupKey] = [item];
    } else {
      result[groupKey].push(item);
    }
  });

  return result;
}