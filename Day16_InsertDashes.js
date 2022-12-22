function insertDashes(str) {
  // write code here
  return str.split(" ").map((char) => {
    return char.split('').join('-')
  }).join(' ')
}


console.log(insertDashes('aba caba'))
console.log(insertDashes('result'))
/**
* Test Suite 
*/
// describe('insertDashes()', () => {
//   it('insert dashes in between chars', () => {
//       // arrange
//       const value = "aba caba";
      
//       // act
//       const result = insertDashes(value);

//       // log
//       console.log("result: ", result);
      
//       // assert
//       expect(result).toBe("a-b-a c-a-b-a");
//   });
// });