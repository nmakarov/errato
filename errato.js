var rnd = function (start, end, inclusive) {
  start = start ? start : 0;
  end = end ? end : 10;
  if (inclusive) {
    end += 1;
  }
  return start + Math.floor(Math.random()*(end-start));
};

module.exports = {
  rnd: rnd,
  rndInclusive: function (start, end) {return rnd(start, end, true);}
};
