// escape sequence
console.log('\xA9'); //hexadecimal sequesnce string
console.log('\u00A9'); //unicode sequesnce string
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804)); //return string from code point

// String object
const foo = new String('foo'); // Creates a String object
console.log(foo); // Displays: [String: 'foo']
console.log(typeof foo); // Returns 'object'

const str = 'Brave new world';

// charAt method of String
console.log(str.charAt(3)); // string.charAt(index)
console.log(str.charAt()); //default returns first charector
console.log(str.charAt(999)); // index not available then returns empty string

// charCodeAt method of String
console.log(str.charCodeAt(3)); // string.charCodeAt(index)
console.log(str.charCodeAt()); //default returns first charector convert UTF-16
console.log(str.charCodeAt(999)); // index not available then returns NaN
console.log(`The character code ${str.charCodeAt(7)} is equal to ${str.charAt(7)}`);

// charPointAt method of String
const icons = '☃★♲';
console.log(icons.codePointAt(1)); // expected output: "9733"
console.log(icons.codePointAt()); //default returns first charector
console.log(icons.codePointAt(999)); // pos not available then returns undefined
console.log(str.codePointAt(3));
console.log(String.fromCharCode(0xD83C, 0xDF03));

// indexOf method of String
console.log('hello world'.indexOf('')); // empty string without position returns 0 
console.log('hello world'.indexOf('' , 10)); // empty string wih position is less than length returns posision number
console.log('hello world'.indexOf('' , 22)); // empty string wih position is greater than length returns length of string
console.log('hello world'.indexOf('or')); // return string index
console.log('hello world'.indexOf('ll', 1)); // find string at position 2 and return string
console.log('hello world'.indexOf('ll', 6)); // find string at position 6 and return string if not found return -1
console.log('hello world'.indexOf('ord')); // returns -1
console.log('hello world'.indexOf('World')); // case sensitive string returns -1


// lastIndexOf method of String
console.log('hello world'.lastIndexOf('')); // empty string without position returns string length 
console.log('hello world'.lastIndexOf('' , 10)); // empty string wih position is less than length returns posision number
console.log('hello world'.lastIndexOf('' , 22)); // empty string wih position is greater than length returns length of string
console.log('hello world'.lastIndexOf('or')); // return string index
console.log('hello world'.lastIndexOf('wo', 5)); // find string at position 5 and return -1
console.log('hello world'.lastIndexOf('wo', 8)); // find string at position 8 and return string 
console.log('hello world'.lastIndexOf('ord')); // returns -1
console.log('hello world'.lastIndexOf('World')); // case sensitive string returns -1

// concat method of String
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // expected output: "Hello World"
console.log(str2.concat(', ', str1)); // expected output: "World, Hello"
let greetList = ['Hello', ' ', 'Venkat', '!']
console.log("".concat(...greetList)); // "Hello Venkat!"
