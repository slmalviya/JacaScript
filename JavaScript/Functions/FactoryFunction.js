let request = "odd";
function oddOrEvenTest(request){
   if(request == "odd"){
    let odd = function(n){
        console.log(!(n%2==0));
    }
    return odd;
   } else if(request=="even"){
    let even = function(n){
        console.log(n%2==0);
    }
    return even;
   } else{
    console.log("Worng Request");
   }
   
}


oddOrEvenTest(11);