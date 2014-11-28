var xbox = require('../lib/xbox')("testkey");

xbox.account.xuid(function(err, xuid){
    console.log(xuid);
});