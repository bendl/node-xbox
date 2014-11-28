'use strict';

var XboxMethod = require('../XboxMethod');
var XboxAdvancedMethod = require('../XboxMethod.advanced');

function xuid() {

    function obj (x) {
        this.xuid = x;
    };

    obj.prototype = {
        getXuid: function(){
            return this.xuid;
        }
    };

    return obj;
}

module.exports = xuid;
