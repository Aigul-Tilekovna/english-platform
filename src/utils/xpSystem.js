export const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function addXP(currentXP, amount) {
  const newXP = currentXP + amount;
  return newXP;
}

export function getLevel(currentXP) {
  if (currentXP < 100) return "A1";
  if (currentXP < 250) return "A2";
  if (currentXP < 500) return "B1";
  if (currentXP < 800) return "B2";
  if (currentXP < 1200) return "C1";
  return "C2";
}