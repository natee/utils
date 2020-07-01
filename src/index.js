import shuffle from './shuffle.js';
import promiseTimeout from './promise-timeout.js';
import promiseDelay from './promise-delay.js';
import quickSort from './quick-sort.js';
import stableSort from './stable-sort.js';
import promisify from './promisify.js';
import promiseNone from './promise-none';
import promiseAny from './promise-any';
import promiseFirst from './promise-first';
import promiseLast from './promise-last';
import promiseMap from './promise-map';
import promiseAllSettled from './promise-allSettled';

let module = {
  shuffle,
  promiseTimeout,
  promiseDelay,
  promiseNone,
  promiseAny,
  quickSort,
  stableSort,
  promisify,
  promiseFirst,
  promiseLast,
  promiseMap,
  promiseAllSettled
};

export default module;