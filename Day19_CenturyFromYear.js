function centuryFromYear(num) {
  //  write code here.
  return Math.floor(num/100) + 1
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