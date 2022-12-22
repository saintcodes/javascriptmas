function candies(children, candy) {
  //  write code here.
    return Math.floor(candy / children) * children
}


console.log(candies(3, 10))
console.log(candies(5, 16))
console.log(candies(5, 25))
console.log(candies(8, 31))
console.log(candies(8, 32))

/**
* Test Suite 
*/
// describe('candies()', () => {
//   it('returns ammount of total equal candy to be eaten', () => {
//       // arrange
//       const children = 3;
//       const candy = 10;
      
//       // act
//       const result = candies(children, candy);

//       // log
//       console.log("result: ", result);
      
//       // assert
//       expect(result).toBe(9);
//   });
// });