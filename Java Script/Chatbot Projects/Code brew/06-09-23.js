// const searchString = "eswar@gmail.com";
// const wordsToCheck = ["demo", "app","link", "reference", "video link"];

// function containsWords(string, words) {
//   const regex = new RegExp("\\b" + words.join("\\b|\\b") + "\\b", "i");
//   return regex.test(string);
// }

// if (containsWords(searchString, wordsToCheck)) {
//   console.log("The string contains one of the specified words.");
// } else {
//   console.log("The string does not contain any of the specified words.");
// }



const inputString = "krishna sai is the one";

// Regular expressions for name, email, and 10-digit Indian phone number
// const nameRegex = /[A-Za-z]+\s?[A-Za-z]*/; // Matches a single word or two words separated by a space (first and last name)
const nameRegex = /^[\w\s]{1,15}$/; // Matches names up to 15 characters and not more than 2 words
const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/; // Matches an email address
const phoneRegex = /\d{10,12}/; // Matches a 10-digit phone number

// Check if the string contains a name, email, or 10-digit Indian phone number
const containsName = nameRegex.test(inputString);
const containsEmail = emailRegex.test(inputString);
const containsPhone = phoneRegex.test(inputString);

if (containsName) {
  console.log("name");
}

if (containsEmail) {
  console.log("email");
}

if (containsPhone) {
  console.log("phone number");
}
