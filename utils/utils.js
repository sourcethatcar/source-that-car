export const capitalize = (str) => {
  if (str === undefined || str.trim().length < 1) {
    return ""
  }
  const capitalizedWord = (word) => `${word[0].toUpperCase()}${word.slice(1)}`

  return str.includes("-")
    ? str
        .split("-")
        .map((word) => capitalizedWord(word))
        .join(" ")
    : capitalizedWord(str)
}
