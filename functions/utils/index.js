const { Levels } = require("../constants");

const getLevelFromSpending = function (spending) {
  if (spending >= Levels.L1.spend && spending < Levels.L2.spend) {
    return Levels.L1.level;
  } else if (spending >= Levels.L2.spend && spending < Levels.L3.spend) {
    return Levels.L2.level;
  } else if (spending >= Levels.L3.spend && spending < Levels.L4.spend) {
    return Levels.L3.level;
  } else if (spending >= Levels.L4.spend && spending < Levels.L5.spend) {
    return Levels.L4.level;
  } else {
    return Levels.L5.level;
  }
};

exports.checkLevelUpPoints = function (prevSpending, spending) {
  const currentLevel = getLevelFromSpending(prevSpending);
  const nextLevel = getLevelFromSpending(spending);

  let points = 0;
  if(currentLevel < nextLevel) {
    for(let level = currentLevel + 1; level <= nextLevel; level++) {
      points = points + Levels[`L${level}`].points;
    }
  }

  return points;
};
