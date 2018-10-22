var suits = ["clubs", "diamonds", "hearts", "spades"];
var faces = ["ace", "2", "3", "4", "5", "6","7", "8", "9", "10", "jack", "queen", "king"];
var cards = [];

$(document).ready(function() {

  $("#deck").submit(function(event) {
    event.preventDefault();
    console.log("hi");
    suits.forEach(function(suit) {
      faces.forEach(function(face) {
        cards.push(face + " of " + suit);
        return cards;

      });
    });
    cards.forEach(function(card) {
      console.log(card);
      $("#fullDeck").append("<li>" + card + "</li>");
    });

  });


});
