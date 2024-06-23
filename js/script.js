'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(843793)));


// 2)
console.log(typeof(5 + ''));

const num = 5;

 console.log("https://vk.com/catalog/" + num);

 const fontSize = 26 + 'px';

 console.log(fontSize);

 //To number

 // 1)
 console.log(typeof(Number('324598')));

//  2)
console.log(typeof(+'324598'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To bollean

// 0, '', null, undefined, Nan;

// 1)
let switcher = null;

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('15')));

// 3)
console.log(typeof(!!'4'));
