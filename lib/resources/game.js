'use strict';

var XboxResource = require('../XboxResource');
var xboxMethod = XboxResource.method;

module.exports = XboxResource.extend({
    game: xboxMethod({
        path: 'game-details/{product_id}',
        urlParams: ['product_id']
    }),
    gameHex: xboxMethod({
        path: 'game-details-hex/{product_id}',
        urlParams: ['product_id']
    })
});

//spec