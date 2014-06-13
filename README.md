errato
======

npm module for randomness and profanity

## Installation

    npm install errato -S

or

    npm install git://github.com/nmakarov/errato.git#0.1.0


## Usage

    var rnd = require('errato').rnd;

    // produce random number equal or greater than 0 and less than 100
    var n = rnd(0, 100);

    // produce a number between 0 and 100 inclusive.
    var n = rnd(0, 100, true);

## Tests

    npm test

## Release History

* 0.1.0 Initial release
