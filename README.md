# node-xbox [![Build Status](https://travis-ci.org/iblanky/node-xbox.svg)](https://travis-ci.org/iblanky/node-xbox)

node-xbox is a Node.js module implementation of the https://xboxapi.com/ API. All information returned is straight from the XboxApi.com API.

### Installation
```
npm install node-xbox
```

### API Overview
This API uses the XboxApi.com API to access Xbox Live information. 
```javascript
var xbox = require('node-xbox')("my xboxapi.com api key");
// xbox.{ RESOURCE_NAME }.{ METHOD_NAME }
```
All methods require a callback as the last argument.
```javascript
xbox.profile.gameClips("2535473249143795", function(err, gameClips){
    // if an error occured, err will be an object describing the error
    // gameClips is an array of gameClips
});
```

### Available methods
Note: Node-xbox has implement all XboxApi.com API endpoints except http://catalog.xboxapi.com/{game_id} 
* RESOURCE_NAME
  * METHOD_NAME
* account
  * accountXuid()
  * messages()
  * recentPlayers()
* game
  * game(product_id)
  * gameHex(product_id_hex)
* profile
  * xuid(gamertag) *- gets the XUID of the specified gamertag*
  * gamertag(xuid) *- gets the gamertag of the specified XUID*
  * profile(xuid)
  * gamercard(xuid)
  * presence(xuid)
  * activity(xuid)
  * activityRecent(xuid)
  * friends(xuid)
  * followers(xuid)
  * gameClips(xuid)
  * gameClipsSaved(xuid)
  * gameStats(xuid, titleid)
  * xbox360Games(xuid)
  * xboxOneGames(xuid)
  * achievements(xuid, titleid)

### Todo
* Clean up and structure data return by the XboxApi.com API.
* Return structured errors
