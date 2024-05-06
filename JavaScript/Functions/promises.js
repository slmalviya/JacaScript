function savetoDB(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDB(
    "poornima",
    () =>{
        console.log("Success: data was saved");
    
   savetoDB( "Shravan",
    () =>{
        console.log("Success2:  data was saved");
    },
    ()=>{
        console.log("Failure2: data was not saved");
    })
    savetoDB( "College",
    ()=>{
       console.log("Success3: data was saved"); 
    }
    ()=>
        {
            console.log("Failure3 : data was not saved");
        }
)}
() =>{
    console.log("failed: weak connection data is not saved");
}
);
