/*
 (c) 2015, Alaf azam
 Hello Lib, a JavaScript library for something very useful.
 https://github.com/alafazam/hello-lib
*/

(function () { 'use strict';

function helloLib() {
    return 'Hello World';
}

// export as AMD module / Node module / browser variable
if (typeof define === 'function' && define.amd) define(function() { return helloLib; });
else if (typeof module !== 'undefined') module.exports = helloLib;
else window.helloLib = helloLib;

})();
