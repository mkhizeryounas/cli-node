exports.convetToNumber = (num) => {
  return +num;
};

exports.add = (a, b) => {
  return exports.convetToNumber(a) + exports.convetToNumber(b);
};
