'use strict';

var request = require('request');
var utils = require('./utils');
var path = require('path');
var when = require('when');

var hasOwn = {}.hasOwnProperty;

var XboxResource = function(xbox, urlData){

    this._xbox = xbox;
    this._urlData = urlData || {};

    this.basePath = utils.makeURLInterpolator(xbox._getApiField('basePath'));
    this.path = utils.makeURLInterpolator(this.path);

    this.initialize.apply(this, arguments);
};

XboxResource.extend = utils.protoExtend;
XboxResource.method = require('./XboxMethod');


XboxResource.prototype = {

    path: '',

    initialize: function () {},

    createDeferred: function(callback){
        var deferred = when.defer();

        if(callback){
            deferred.promise.then(function(res){
                setTimeout(function() { callback(null, res); }, 0);
            }, function(err){
                setTimeout(function (){ callback(err, null); }, 0);
            })
        }

        return deferred;
    },

    createUrlData: function(){
        var urlData = {};

        for(var i in this._urlData){
            if(hasOwn.call(this._urlData, i)) {
                urlData[i] = this._urlData[i];
            }
        }
        return urlData;
    },

    createFullPath: function(commandPath, urlData){
        return path.join(
            this.basePath(urlData),
            this.path(urlData),
            typeof commandPath == "function" ?
                commandPath(urlData) : commandPath
        ).replace(/\\/g, '/');
    },

    request: function (method, path, data, callback) {

        var self = this;

        var headers = {
            "X-AUTH": this._xbox._getApiField('key')
        };

        makeRequest();

        function makeRequest(){
            request({
                method: method,
                uri: 'https://' + self._xbox._getApiField('host') + path,
                headers: headers
            }, function(e, r, b){
                return callback.call(self, null, b);
            });
        }
    }
}


module.exports = XboxResource;