'use strict';

var XboxMethod = require('../XboxMethod');

module.exports = function(){
    return {
        xuid: XboxMethod({
            path: 'accountXuid'
        }),
        messages: XboxMethod({
            path: 'messages'
        })
    };
}