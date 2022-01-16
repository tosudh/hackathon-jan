function checkVersion(str1, str2) {
  if (str1 === str2) {
    return "same";
  }
  str1 = str1.split(".");
  str2 = str2.split(".");

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] > str2[i]) {
      return "downgraded";
    } else if (str1[i] < str2[i]) {
      return "upgraded";
    }
  }
  if (str1.length > str2.length) {
    return "downgraded";
  } else if (str2.length > str1.length) {
    return "upgraded";
  } else {
    return "same";
  }
}

console.log(checkVersion("12.1.5", "12.1.5.2"));
