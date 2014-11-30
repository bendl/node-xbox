'use strict';

Xbox.DEFAULT_HOST = "xboxapi.com";
Xbox.DEFAULT_BASE_PATH = "/v2/";

var resources = {
    Account: require('./resources/account'),
    Game: require('./resources/game'),
    Profile: require('./resources/profile')
};

/*
account:
/accountXuid
/messages
profile:
/{xuid}/profile
*/

Xbox.XboxResource = require('./XboxResource');

function Xbox(key, options) {

    if (key == undefined)
        throw new Error("xbox-node API key missing. E.g. require('xbox-node')('myApiKey')")

    if (!(this instanceof Xbox)) {
        return new Xbox(key, options);
    }

    this._api = {
        auth: null,
        host: Xbox.DEFAULT_HOST,
        basePath: Xbox.DEFAULT_BASE_PATH,
        key: key
    };

    this._prepResources();
};

Xbox.prototype = {
    _prepResources: function(){
        for(var name in resources){
            this[name[0].toLowerCase() + name.substr(1)] = new resources[name](this);
        }
    },
    _setApiField: function(key, value){
        this._api[key] = value;
    },
    _getApiField: function(key){
        return this._api[key];
    }
};

module.exports = Xbox;