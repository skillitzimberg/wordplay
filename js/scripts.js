$(document).ready(function() {
  var suits = ["clubs", "diamonds", "hearts", "spades"];
  var faces = ["ace", "2", "3", "4", "5", "6","7", "8", "9", "10", "jack", "queen", "king"];
  var cards = [];

  $("#deck").submit(function(event) {
    event.preventDefault();

    suits.forEach(function(suit) {
      faces.forEach(function(face) {
        cards.push(face + " of " + suit);
        return cards;

      });

    });

  });
  cards.forEach(function(card) {
    $("#fullDeck").append("<li>" + card "</li>");
  });

});
