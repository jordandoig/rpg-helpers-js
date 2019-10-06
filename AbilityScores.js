generateAbilityScores = () => {
  let scores = [];

  // Get six scores, unsorted
  for (var i = 0; i < 6; i++) {
    scores.push(generateScore());
  }

  return scores;
}

generateScore = () => {
  let score = 0;
  let min;

  for (var i = 0; i < 4; i++) {
    let roll = rollDie(6);

    // Keep track of the lowest roll
    if (roll < min || min === undefined) {
      min = roll;
    }

    // Return score after incorporating 4th roll
    if (i === 3) {
      // Add new roll and remove min if roll > min
      if (roll > min) {
        score = score - min + roll;
        return score;
      // Return score without new roll if last roll is lowest
      } else {
        return score;
      }
    // Add roll to score total
    } else {
      score += roll;
    }
  }

  return "How did I get here?"
}