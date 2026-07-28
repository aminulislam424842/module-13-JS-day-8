function countVowels(str) {
  let vowels = "aeiou";
  let vowel = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < vowel.length; i++) {
    if (vowels.includes(vowel[i])) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countVowels("Orange")); 