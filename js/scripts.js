//business logic ----------------

var roll = function() {
  let n = Math.floor(Math.random() * 6) + 1;

  if(n === 1) {
    activePlayer.setCurrentScore(0);
    swapPlayer();
  } else {
    activePlayer.addCurrentScore(n);
  }
}

var hold = function() {
  activePlayer.updateTotalScore();
  activePlayer.setCurrentScore(0);

  if (activePlayer.score >= 100) {
      btnRoll.reset();
      btnHold.reset();
      activePlayer.setWinner();
  } else {
      switchToNextPlayer();
  }
}

function setCurrentScore() {

}




//UI logic ------------------
$(document).ready(function() {
  $("form#formOne").submit(function(){
    event.preventDefault();
    var pOneInput = $("#userOne").val();
    var pTwoInput = $("#userTwo").val();

    $(".userOne").append(pOneInput);
    $(".userTwo").append(pTwoInput);
    $("#game").show();
    $("#formOne").hide();
  })

})
