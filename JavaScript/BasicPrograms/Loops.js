let n = 5;
if(n%=0){
    console.log("The Number is Even = ", n);
}
else{
    console.log("The Number is Odd = ",n);
}

for(let i=1; i<=15; i=i+1){
    console.log(i);         // 1 to 15 Odd numbers
}                  

for(let i=2; i<=20; i=i+2){
    console.log(i);     // Even Numbers
}

for(let i=5; i<=50; i=i+5){
    console.log(i);      // 5 table 
}



let i= 1;
while(i<=10){
    console.log(i);
    i++;
}


// Break Statement 

let j = 1;

while(j<=6){
    if(j==4){
        break;
    }
    console.log(j);
    j++;
}

console.log("We used break keyword and stop the loop at 4!!"); 

// Loops with Array

let fruits = ["mango","apple","banana","orange","xyz"];

for(let i = 0; i<fruits.length; i++){
    console.log(i, fruits[i]);
}

// nested Array in loop

let student = [["shravan",100],["Sachin",95],["Dheeraj",96]];

for(let i=0 ; i<student.length; i++){
    console.log(student[i]);
    for(let j=0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}



// For of For loop

let name = ["shravan", "Dheeraj", "Sachin"];

for(Name of name){
    console.log(Name);
}

// With Char 

for(char of "ShravanMalviya"){
    console.log(char);
}

//  Nested For of Loop

let car = [["BMW", "TATA", "TOYOTA"],["MARUTI", "SUZUKI","BUGATI"]];

for(brand of car){
    for(name of brand){
        console.log(name);
    }
}