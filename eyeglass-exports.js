"use strict";

module.exports = function(eyeglass, sass) {
  console.log( "hey!" );
  return {
    sassDir: require("path").resolve(__dirname, "source/scss")
  };
};
