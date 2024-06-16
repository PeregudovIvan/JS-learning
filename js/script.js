"use strict";

if (5) {
    console.log('Ok!');
} else {
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too many');
// } else {
//     console.log('Ok!');
// }
// (num === 50) ? console.log('Ok!') : console.log('Error');


const num = '50';

switch (num) {
    case '49':
        console.log('false');
        break;
    case '100':
        console.log('false');
        break;
    case '50':
        console.log('true');
        break;
    default:
        console.log('nothing true');
        break;
}