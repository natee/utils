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
  promiseLast
};

export default module;