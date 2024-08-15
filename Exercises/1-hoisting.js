'use strict';

const fn = () => {
  someIdentificator = 'some text';
  console.log(someIdentificator);
  var someIdentificator;
};

//fn();

module.exports = { fn };
