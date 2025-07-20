// function showMessage(){
//     console.log("hello world")
// }
// showMessage();

// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     console.log( message );
//   }
  
//   showMessage(); // Hello, I'm JavaScript!
  
//  // <-- Error! The variable is local to the function
  
//  let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John

let myName = 'rohit';

function showMessage(){
    let message = "my name is " + myName;
    console.log(message);
    
}
showMessage();

function greeting(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function farewell() {
    console.log("Goodbye!");
  }
  
  greeting("John", farewell);