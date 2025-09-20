/**
 * Think of a restaurant 🍴. When you (the client/browser) want food, 
 * you don’t go into the kitchen and grab it directly. Instead, 
 * you tell the waiter (JavaScript) what you want. The waiter goes to the kitchen (server), 
 * which prepares the food (data). But instead of bringing the entire kitchen, 
 * the waiter just brings you the menu items you ordered in a neat, easy-to-read way. That “neat format” is JSON.
 *  It’s like a well-arranged plate of data that the browser can easily understand and display on the webpage.

In short: JSON is the language (menu card) used to pass data between the client and server so that 
the webpage can show meaningful information to you.
 * 
 * 
 * 
 */


// Converting object to stringfy 
const person = {

 name : 'devnet',
 skills :  ['devops' , 'networking', 'ci/cd'],
 status : 'Engineer',
 Designation : 'Infrustructer Engineer'
}



  const mainperson = JSON.stringify(person)
  console.log(mainperson);



const student = {
  name: "Alice",
  age: 22,
  course: "Networking"
};

const jsonData = JSON.stringify(student);
console.log(jsonData);



// converting string to object


const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 }
];

const jsonProducts = JSON.stringify(products)
const jsonProducts2 = JSON.parse(jsonProducts)
console.log(jsonProducts2)




const serverResponse = '[{"name":"DevNet","role":"Engineer"},{"name":"John","role":"Admin"}]';
const serverResponse2 = JSON.stringify(serverResponse)
// console.log(serverResponse2);
const serverResponse3= JSON.parse(serverResponse2);



// fake api with json place holder


fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))