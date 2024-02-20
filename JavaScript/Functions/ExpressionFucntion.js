const sum = function (a,b){
    console.log(a+b);
}
sum(10,20);


// high order Function 
const greet = function(){
    console.log("Hello Namste");
}
function multiGreet(func,count){
    for(let i=0; i<count; i++){
        func();
    }
  
}

multiGreet(greet, 1000);

// function greet() {
//     console.log("Hello Namaste");
// }

// function multiGreet(func, count) {
//     for (let i = 0; i < count; i++) {
//         func();
//     }
// }

// multiGreet(greet, 1000);
