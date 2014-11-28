'use strict';

var XboxResource = new require('./XboxResource');
var util = require('util');
var request = require('request');

function XboxMethod(spec){

    return function(callback){
        callback(0, 1);
    }
}

module.exports = XboxMethod;