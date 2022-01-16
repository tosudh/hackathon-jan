function checkFreq(num) {
  let freq = {};
  let digit;
  while (num) {
    digit = num % 10;
    num = parseInt(num/10);

    freq[digit] = freq[digit] ? freq[digit]+1 : 1;
  }
  return freq;
}

let num = 121215456;

let freq = checkFreq(num)

for (let i = 0; i < 10; i++) {
  console.log(`Frequency Of ${i} = ${freq[i]?freq[i]:0}`);
}
