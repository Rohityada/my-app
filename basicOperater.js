let x = 1;
x = -x;
console.log(x)

let x1 = 1
let y = 3;
console.log(y - x1);

let s = "my" + "string";
console.log(s)
console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "2");
console.log("1" + 2 + 2)

console.log(6 - "2");
console.log("6" - 2);

console.log("6" / "2");

// No effect on numbers
let x2 = 1;
console.log( +x2 ); // 1

let y2 = -2;
console.log( +y2 ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

console.log(false && false);
console.log(false || true);
console.log(!true);
console.log(!false);
console.log(false && true);
console.log(true && true);
console.log(true || true);
console.log(false || false);
console.log(true && false);



