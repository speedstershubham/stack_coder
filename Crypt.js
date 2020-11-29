const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "t",
  "s",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Who are you?", (name) => {
  var res = name.split("");
  for (let i = 0; i < res.length; i++) {
    const count = alpha.indexOf(res[i]);
    //count.filter((item) => item > 26).map((item) => item + item);
    // console.log(count);
    const sum = count + count;

    const result = alpha[sum];
    console.log(result[sum]);
    console.log(result);
  }

  console.log(`Hey there ${res}!`);
  readline.close();
});

console.log(alpha);
