let cutSpot = null;
let phase = 1; // 1 = Player 1 choosing, 2 = Player 2 guessing

function chooseCut(spot) {
  const result = document.getElementById("result");
  const instructions = document.getElementById("instructions");

  if (phase === 1) {
    // Player 1 chooses the cut
    cutSpot = spot;
    instructions.textContent = "Player 2: Guess the cut position!";
    result.textContent = "";
    phase = 2;
  } else if (phase === 2) {
    // Player 2 guesses
    if (spot === cutSpot) {
      result.textContent = "🎉 Correct! You found the cut!";
    } else {
      result.textContent = "❌ Wrong guess, try again!";
    }
  }
}
