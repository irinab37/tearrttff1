// Helper function to calculate the sum of an array of numbers
function calculateSum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Helper function to check if a string is palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Helper function to generate a random color in hexadecimal format
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Using the helper functions
  console.log(calculateSum([1, 2, 3, 4, 5])); // Output: 15
  console.log(isPalindrome("racecar")); // Output: true
  console.log(generateRandomColor()); // Output: Random hexadecimal color