cordova.define("com.acme.plugin.alert.Alert", function(require, exports, module) { /*global cordova, module*/

module.exports = {
  alert: function(title, message, buttonLabel, successCallback) {
    cordova.exec(successCallback,
                 null, // No failure callback
                 "Alert",
                 "alert",
                 [title, message, buttonLabel]);
  }
};

});
