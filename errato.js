exports.rnd = function (start, end, inclusive) {
  start = start ? start : 0;
  end = end ? end : 10;
  if (inclusive) {
    end += 1;
  }
  return start + Math.floor(Math.random()*(end-start));
};

exports.rndInclusive = function (start, end) {
  return exports.rnd(start, end, true);
};

