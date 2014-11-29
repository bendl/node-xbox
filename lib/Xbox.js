'use strict';

Xbox.DEFAULT_HOST = "xboxapi.com";
Xbox.DEFAULT_BASE_PATH = "/v2/";

var resources = {
    Account: require('./resources/account'),
    Xuid: require('./resources/xuid')
};

function Xbox(key, options){

    if(key == undefined)
        throw new Error("xbox-node API key missing. E.g. require('xbox-node')('myApiKey')")

    if (!(this instanceof Xbox)) {
        return new Xbox(key, options);
    }

    this._api = {
        auth: null,
        host: Xbox.DEFAULT_HOST,
        basePath: Xbox.DEFAULT_BASE_PATH
    };

    this.key = key;

    this._prepResources();
    this._api['auth'] = 'X-AUTH: ' + key;

    console.log(this);
};

Xbox.prototype = {
    _prepResources: function(){
        for(var name in resources){
            this[name[0].toLowerCase() + name.substr(1)] = new resources[name](this);
        }
    },
    _buildPath: function(path){
        return "https://" + this._api.host + this._api.basePath + path;
    }
};

module.exports = Xbox;