$(document).ready(function() {
  $("form#input").submit(function(event){
    event.preventDefault();

    var inputSentence = $("input#sentence").val();
    var sentenceWords = inputSentence.split(" ");
    var words = [];

    var threePlusLetterWords = sentenceWords.forEach(function(word) {
      
      if (word && word.length >= 3) {
        words.push(word);

      }
         console.log(words);
    });

    console.log(threePlusLetterWords);
  });

});
