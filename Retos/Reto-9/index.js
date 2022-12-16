export default function groupBy(collection, it) {
    return collection.reduce((result, item) => {
      let groupKey = typeof it === 'function' ? it(item) : item[it];
      result[groupKey] = [...(result[groupKey] || []), item]
      return result;
    }, {});
  }