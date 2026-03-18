export function saveProgress(userData) {
  localStorage.setItem("userProgress", JSON.stringify(userData));
}

export function loadProgress() {
  const data = localStorage.getItem("userProgress");
  return data ? JSON.parse(data) : { xp: 0, level: "A1", stars: {} };
}