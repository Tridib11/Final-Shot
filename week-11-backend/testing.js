const getRandomValue = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1))+min;

// Call the function and log the output
console.log(getRandomValue());       // Random value between 1 and 10
