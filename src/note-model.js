(function(exports){
  var EXCALM = 5

  function exclaim(string){
    return string + "!".repeat(EXCALM);
  };

  exports.exclaim = exclaim;
})(this);

console.log(exclaim("hi"));
