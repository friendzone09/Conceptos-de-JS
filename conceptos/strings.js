let name = 'Alejandro';
let city = 'Apizaco';
console.log("Hello, I'm" + " " + name + " And I'm from" + " " + city );

let message= 'Hello, I\'m ' + name + ' and I\'m from ' + city;
console.log(message);

message = `Hello, I'm ${name} and I'm from ${city} `;
console.log(message);

console.log(message.toLowerCase());
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hello'));
console.log(message.endsWith('.'));