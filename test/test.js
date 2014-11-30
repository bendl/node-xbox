var assert = require('assert');
var expect = require("chai").expect;



describe('xbox', function() {

    var xbox;

    before(function(){
        xbox = require('../lib/Xbox')("my key");
    });

    it("should create the resources, given a key", function(){
        expect(xbox).to.have.a.property("account");
        expect(xbox).to.have.a.property("game");
        expect(xbox).to.have.a.property("profile");
    });
});