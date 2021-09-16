export function memoize(func) {
  const cache = {};
  return function (...args) {
    if (args.length !== 1) {
      return func(...args);
    }

    if (cache.hasOwnProperty(args[0].src)) {
      console.log('이미 캐시된 값이 있습니다.');
      return cache[args[0].src];
    }

    const result = func(...args);
    cache[args[0].src] = result;

    console.log('캐시하였습니다.');

    return func(...args);
  };
}
