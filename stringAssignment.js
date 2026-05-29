function reverseString(str) {

  const chars = str.split("");

  let reversed = "";
  for (let i = chars.length - 1; i >= 0; i--) {
    reversed += chars[i];
  }
  console.log(`Reversed "${str}" => "${reversed}"`);
  return reversed;
}

function isPalindrome(str) {
  const reversed = reverseString(str);
  // Check if reversed and original are the same
  return str === reversed;
}
const tests = ["racecar", "madam", "hello", "level", "12321", "ab", ""];

for (const t of tests) {
  const result = isPalindrome(t);
  console.log(`"${t}" palindrome? => ${result}\n`);
}
