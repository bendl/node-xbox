'use strict';

var XboxResource = require('../XboxResource');
var xboxMethod = XboxResource.method;

module.exports = XboxResource.extend({
    xuid: xboxMethod({
        path: 'xuid/{gamertag}',
        urlParams: ['gamertag']
    }),
    gamertag: xboxMethod({
        path: 'gamertag/{xuid}',
        urlParams: ['xuid']
    }),
    profile: xboxMethod({
        path: '{xuid}/profile',
        urlParams: ['xuid']
    }),
    gamercard: xboxMethod({
        path: '{xuid}/gamercard',
        urlParams: ['xuid']
    }),
    presence: xboxMethod({
        path: '{xuid}/presence',
        urlParams: ['xuid']
    }),
    activity: xboxMethod({
        path: '{xuid}/activity',
        urlParams: ['xuid']
    }),
    activityRecent: xboxMethod({
        path: '{xuid}/activity/recent',
        urlParams: ['xuid']
    }),
    friends: xboxMethod({
        path: '{xuid}/friends',
        urlParams: ['xuid']
    }),
    followers: xboxMethod({
        path: '{xuid}/followers',
        urlParams: ['xuid']
    }),
    gameClips: xboxMethod({
        path: '{xuid}/game-clips',
        urlParams: ['xuid']
    }),
    gameClipsSaved: xboxMethod({
        path: '{xuid}/game-clips/saved',
        urlParams: ['xuid']
    }),
    gameStats: xboxMethod({
        path: '{xuid}/game-stats/{titleid}',
        urlParams: ['xuid', 'titleid']
    }),
    xbox360Games: xboxMethod({
        path: '{xuid}/xbox360games',
        urlParams: ['xuid']
    }),
    xboxOneGames: xboxMethod({
        path: '{xuid}/xboxonegames',
        urlParams: ['xuid']
    }),
    achievements: xboxMethod({
        path: '{xuid}/achievements/{titleid}',
        urlParams: ['xuid', 'titleid']
    })
});

//spec