function name(name,age){
    console.log(`name is ${name} and age is ${age}`);
}
name("Shravan",22);

// for Sum 

function sum(a,b){
    console.log(a+b);
}

sum(2,5);
sum(5,9);

function avgNum(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
avgNum(4,4,4);

// Table 

function table(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
table(5);