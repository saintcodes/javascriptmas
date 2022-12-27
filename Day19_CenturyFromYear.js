function centuryFromYear(num) {
  //  write code here.
  if (Math.floor(num) === "00") {
    console.log('hi')
  }
}



console.log(centuryFromYear(1905))
/**
* Test Suite 
*/
// describe('centuryFromYear()', () => {
//   it('returns current century', () => {
//       // arrangee
//       const year = 1905;
      
//       // act
//       const result = centuryFromYear(year);

//       // log
//       console.log("result 1: ", result);
      
//       // assert
//       expect(result).toBe(20);
//   });
  
//   it('returns current century for edge case of start of century', () => {
//       // arrange
//       const year = 1700;
      
//       // act
//       const result = centuryFromYear(year);

//       // log
//       console.log("result 2: ", result);
      
//       // assert
//       expect(result).toBe(17);
//   });    
// });