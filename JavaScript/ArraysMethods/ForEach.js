let name = ["shrvan", "sachin", "Dheeraj"];

let student = function (el) {
    console.log(el);
}

name.forEach(student);

// Second Method 

let arr = ["slm", "ss", "dl"];

arr.forEach(function(el){
    console.log(el)
})


let arrr=  ["shrvan", "sachin", "Dheeraj"];

arrr.forEach( function(el){
    console.log(el);
})

// objects 

let obj =[{
    name: "Shravn",
    marks: 95,
    age: 21,
    gender: "male"
}];

obj.forEach((name) =>{
    console.log(name.name);
})
