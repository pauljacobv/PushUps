cordova.define("au.id.currie.tts.TextToSpeech", function(require, exports, module) { 
var exec = require('cordova/exec');

module.exports = {

    speak: function(text) {
        exec(null, null, "TextToSpeech", "speak", [text]);
    }
};

});
