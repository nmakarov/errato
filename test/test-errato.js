var should = require('chai').should();
var errato = require('../errato');
var rnd = errato.rnd;
var rndInclusive = errato.rndInclusive;

describe('#rnd', function () {
  it('produces random numbers', function () {
    var n1 = rnd();
    var n2 = rnd();
    while (n1 === n2) {
      n2 = rnd();
    }
    n1.should.not.equal(n2);
    // console.log(n1 + ' ' + n2);
  });

  it ('produces numbers within the range', function () {
    var ranges = [
      [0,10],
      [3,4]
    ];

    var maxIterations = 100;

    ranges.forEach(function (range) {
      var min = range[0];
      var max = range[1];

      var res = [];
      for (var i = 0; i < maxIterations; i++) {
        r = rnd(min, max);
        res.push(r);
      }

      // check that random numbers are withing the specified range
      var ok = true;
      res.forEach(function (r) {
        ok = ok && (r >= min && r < max);
      });
      ok.should.equal(true);
    });
  });

  it('should work inclusively', function () {
    var min = 3;
    var max = 5;
    var res = [];
    for (var i = 0; i < 100; i++) {
      r = rndInclusive(min, max);
      res.push(r);
    }

    var ok = true;
    res.forEach(function (r) {
      // note `<=` condition here:
      ok = ok && (r >= min && r <= max);
    });
    ok.should.equal(true);
  });
});
