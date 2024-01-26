import { LevelData } from "../constants/constants";
import { nFormatter } from "./utils";

export const calculateProgress = (spending) => {
  let currentLevel = null;
  let remainingToNextLevel = null;
  let nextLevel = null;
  let nextLevelSpend = 0;
  let percent = 0;

  for (let i = 0; i < LevelData.length; i++) {
    if (spending < LevelData[i].spend) {
      currentLevel = LevelData[i - 1] || LevelData[0];
      nextLevel = LevelData[i];
      remainingToNextLevel = LevelData[i].spend - spending;
      nextLevelSpend = LevelData[i].spend;
      break;
    }
  }

  if (!currentLevel) {
    currentLevel = LevelData[LevelData.length - 1];
    remainingToNextLevel = 0;
  }

  if (spending > 0 && nextLevelSpend === 0) {
    percent = 100;
  } else {
    percent = nFormatter(spending / nextLevelSpend, 1);
  }

  return {
    currentLevel,
    nextLevel,
    remainingToNextLevel,
    percent,
  };
};
