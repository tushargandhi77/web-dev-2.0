const inputString = "Hello, this is a sample string";

const wordsArray = inputString.split(/\s+/).map((word)=>({word,length:word.length}))

console.log(wordsArray);
