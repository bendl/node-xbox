var assert = require('assert');
var xbox = require('../lib/Xbox')("my key");

describe('xbox', function(){
    it('should be an object containing account and xuid objects', function(done){
        if('account' in xbox && 'xuid' in xbox)
            done();
        else throw new Error("Fail");
    });
});

describe('xbox key', function(){
    it('should have a key', function(done){
        if(xbox.key) done();
        else throw new Error("No Key");
    });
});