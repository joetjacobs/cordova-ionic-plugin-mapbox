var execute = require("cordova/exec");

var navigation = {

  navigate:function(location, success, failure){
      return execute(success, failure, 'MapboxPlugin', 'navigate', [location]);
    }
};
module.exports = navigation;
