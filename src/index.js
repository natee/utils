import shuffle from './shuffle.js';
import promiseTimeout from './promise-timeout.js';
import promiseDelay from './promise-delay.js';
import quickSort from './quick-sort.js';
import stableSort from './stable-sort.js';
import promisify from './promisify.js';
import promiseNone from './promise-none';
import promiseAny from './promise-none';

let module = {
  shuffle,
  promiseTimeout,
  promiseDelay,
  promiseNone,
  promiseAny,
  quickSort,
  stableSort,
  promisify,
};

export default module;