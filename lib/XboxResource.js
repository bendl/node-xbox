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

    _responseHandler: function(data, callback){
        //check direct data for errors
        var self = this;

        return callback.call(self, null, data);

        var body = JSON.parse(data.body);

        var fs = require('fs');
        fs.writeFile("./r.log", JSON.stringify(body));

        return;
    },

    _returnPretty: function(data, callback){
        var self = this;
        var ApiReturnModel = require('models/ApiReturnModel');

        if(data.hasOwnProperty("_status")){
            if(body._status == 200) {
                return callback.call(self, new ApiReturnModel(200, data));
            }
        }
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
                //return callback.call(self, null, b);
                //if e error check

                //return a prettyResponse for now
                return self._responseHandler(r, callback);
            });
        }
    }
}


module.exports = XboxResource;