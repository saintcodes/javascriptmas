function countVowelConsonant(str) {
  // write code here
  let sum = 0  
  let vowels = ['a','e','i','o','u']

  str.split('').map((letter) => {
    vowels.includes(letter) ? sum += 1 : sum += 2
  })
  
  return sum
}



/**
* Test Suite 
*/
// describe('countVowelConsonant()', () => {
//     it('returns total of vowels(1) and consonants(2) to be added', () => {
//         // arrange
//         const value = 'abcde';
        
//         // act
//         const result = countVowelConsonant(value);

//         // log
//         console.log("result: ", result);
        
//         // assert
//         expect(result).toBe(8);
//     });
// });
countVowelConsonant('hello')