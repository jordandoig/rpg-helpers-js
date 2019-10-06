generatePercentile = () => {
  let percentile;

  let tens = generateTen();
  let ones = generateTen();

  percentile = tens + ones;

  if (percentile === "00") {
    percentile = "100";
  }

  return percentile;
}

// Get single-digit string version of d10 roll
generateTen = () => {
  let roll = rollDie(10).toString();

  // Keep tens as single digits
  if (roll === "10") {
    roll = "0";
  }

  return roll;
}

rollDie = (die=6, mod=0) => Math.floor(Math.random() * die) + mod + 1;