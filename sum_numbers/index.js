const sumNumberFindTarger = (numbers = [], target = 0) => {
  if (target < 0 || numbers.length === 0) {
    return false;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return true;
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      sum += numbers[j];

      if (sum === target) {
        return true;
      }

      if (sum > target) {
        break;
      }
    }
  }

  return false
};

module.exports = { sumNumberFindTarger };