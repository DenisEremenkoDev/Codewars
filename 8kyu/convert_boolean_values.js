// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });
//   });

function boolToWord( bool ){
    return bool ? "Yes" : "No"
}
const test = boolToWord(false)
console.log(test);
