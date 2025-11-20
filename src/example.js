// This file contains intentional linting violations to test the workflow

// Unused variable - should trigger no-unused-vars error
const unusedVariable = "I am not used";

// Missing semicolons - should trigger semi errors
const message1 = "Hello world"
const message2 = "This should have a semicolon"

// Double quotes instead of single quotes - should trigger quotes error
const greeting = "Hello from double quotes";

// Console statements - should trigger no-console warnings
console.log("This is a console log");
console.error("This is a console error");

// Function with proper styling to show good code alongside bad
function calculateSum(a, b) {
  const result = a + b;
  return result;
}

// Export the function
module.exports = {
  calculateSum
};

// More violations:
const badQuotes = "mixed quotes should fail";
const missingSemi = "no semicolon here"
const unused = "another unused var"