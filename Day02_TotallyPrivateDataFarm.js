import userData from "./Day02_data.js";

// import { parse } from 'node-html-parser';
// parse = require('node-html-parser');
/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 
const transformData = (data) => {
    const result = data.map((person) => {
        const birthdateObject = new Date(person.dob.date);
        const formattedBirthday = birthdateObject.toDateString();
        return {
            fullName: `${person.name.first} ${person.name.last}`,
            birthday: formattedBirthday
        }
    })
    return result;
*/
function transformData(data){
    const result = data.map((person) => {
        let birthDate = new Date(person.dob.date).toDateString();
        return {
            fullName: `${person.name.first} ${person.name.last}`,
            birthday: birthDate
        }
    })
    return result
}

console.log(transformData(userData));

// console.log('hei')