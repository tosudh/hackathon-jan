// Ques 4.js

let n = 6;

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    if (j <n-i-1) {
      str += " ";
    } else {
      str += "*";
    }
  }
  console.log(str);
}
