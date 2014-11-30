'use strict';

var XboxResource = require('../XboxResource');
var xboxMethod = XboxResource.method;

module.exports = XboxResource.extend({
    accountXuid: xboxMethod({
        path: 'accountXuid'
    }),
    messages: xboxMethod({
        path: 'messages'
    }),
    recentPlayers: xboxMethod({
        path: 'recent-players'
    })
});
