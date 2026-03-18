export const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "en-US"
  utterance.rate = 0.9
  utterance.pitch = 1
  speechSynthesis.cancel()
  speechSynthesis.speak(utterance)
}