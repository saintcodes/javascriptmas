function validTime(str) {
    //  write code here.
    let time = str.split(":")
    const [hours, minutes] = time
    console.log(typeof(hours), typeof(minutes))
}


console.log(validTime('13:58'))
console.log(validTime('25:51'))
console.log(validTime('02:76'))
/**
* Test Suite 
*/
// describe('validTime()', () => {
//     it('returns true for valid time', () => {
//         // arrange
//         const str = '13:58';
        
//         // act
//         const result = validTime(str);

//         // log
//         console.log("result 1: ", result);
        
//         // assert
//         expect(result).toBe(true);
//     });

//     it('returns false when invalid hours', () => {
//         // arrange
//         const str = '25:51';
        
//         // act
//         const result = validTime(str);

//         // log
//         console.log("result 1: ", result);
        
//         // assert
//         expect(result).toBe(false);
//     });

//     it('returns false when invalid minutes', () => {
//         // arrange
//         const str = '02:76';
        
//         // act
//         const result = validTime(str);

//         // log
//         console.log("result 1: ", result);
        
//         // assert
//         expect(result).toBe(false);
//     });
// });