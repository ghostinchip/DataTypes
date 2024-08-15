'use strict';

const inc = (arg) => ++arg;

const a = 5;
const b = inc(a);
console.dir({ a, b });

module.exports = { inc };
