'use strict';

var xboxMethod = require('./XboxMethod');
var utils = require('./utils');
var OPTIONAL_REGEX = /^optional!/;

module.exports = function xboxMethod(spec){

    var commandPath = typeof spec.path == 'function' ? spec.path
        : utils.makeURLInterpolator(spec.path || '');
    var requestMethod = (spec.method || 'GET').toUpperCase();
    var urlParams = spec.urlParams || [];

    return function(){

        var self = this;
        var args = [].slice.call(arguments);

        var callback = typeof args[args.length - 1] == 'function' && args.pop();
        var data = utils.isObject(args[args.length - 1]) ? args.pop() : {};
        var urlData = this.createUrlData();

        var deferred = this.createDeferred(callback);

        for(var i = 0; i < urlParams.length; ++i){
            var arg = args[0];
            var param = urlParams[i];

            var isOptional = OPTIONAL_REGEX.test(param);
            param = param.replace(OPTIONAL_REGEX, '');

            if(!arg) {
                if(isOptional) {
                    urlData[param] = "";
                    continue;
                }
                throw new Error("I require argument '" + urlParams[i] + "', but I got: " + arg);
            }

            urlData[param] = args.shift();
        }

        var requestPath = this.createFullPath(commandPath, urlData);

        self.request(requestMethod, requestPath, data, function(err, success){

            if(err){
                deferred.reject(err);
            } else {
                deferred.resolve(success);
            }
        });

        return deferred.promise;
    }
};