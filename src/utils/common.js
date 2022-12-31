exports.convertToNumber = (num) => {
  return +num;
};

exports.add = (a, b) => {
  return exports.convertToNumber(a) + exports.convertToNumber(b);
};
