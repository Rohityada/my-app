let p = 0
while(p < 3){
  console.log(p);
    p++;
}


let i = 3;
while (i) {
  console.log(i);
  i--;
}
let a = 0;
while (a < 3) { 
  console.log( a );
  a++;
}

let isUserSignedIn = true;
let isPaidUser = true;

if (isUserSignedIn == true || isPaidUser == true) {
  console.log('User is signed in');
} else {
  console.log('User is not signed in');
}

console.log('End....')

let userSubscription = "super";
if (userSubscription == "unsubscribed"){
  console.log("show pricing page");
} else if(userSubscription == "super"){ 
  console.log("only hindi content");
} else if (userSubscription == "premium"){
  console.log("show all content");
}else{
  console.log("show error page");
}
console.log('End....');






