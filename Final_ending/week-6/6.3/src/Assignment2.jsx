const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];

const TotalLines = 1000;
const ALL_WORDS = [];

for (let i = 0; i < TotalLines; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())];
    sentence += " ";
  }
  ALL_WORDS.push(sentence);
}
