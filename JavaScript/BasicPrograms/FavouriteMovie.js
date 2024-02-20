let favrt = "ironman";

let guess = prompt("Enter a fvrt movie");

while((favrt!=guess) && (guess!="quit")){
    guess = prompt("Enter a right moive name !");
}

if(guess==favrt){
    console.log("yess it is your favrt moviee");
    
}
else{
    console.log("Quit");
}