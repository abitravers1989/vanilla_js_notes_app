
(function(exports){
  function Note(textInput){
    this.text = textInput;
  };

  Note.prototype.returnText = function(){
    return this.text
  };

  exports.Note = Note;

})(this);

note = new Note("hiii");
note.returnText();
