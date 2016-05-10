cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/org.awokenwell.proximity/www/proximity.js",
        "id": "org.awokenwell.proximity.proximity",
        "clobbers": [
            "navigator.proximity"
        ]
    },
    {
        "file": "plugins/au.id.currie.tts/www/tts.js",
        "id": "au.id.currie.tts.TextToSpeech",
        "clobbers": [
            "window.texttospeech"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.awokenwell.proximity": "0.2.1",
    "au.id.currie.tts": "0.0.1"
}
// BOTTOM OF METADATA
});