let todo = [];

let req = prompt("PLease Enter your task");

while(true){
    if(req=="quit"){
      console.log("You are Quit the App");
      break;
    }
    if(req=="list"){
        console.log("---------------------");
        for(let i =0; i<todo.length;i++)
        console.log(i,todo[i]);
         

    }

    else if(req=="add"){
        let task = prompt("What you want to add in This App");
        todo.push(task);
        console.log("task Addes");
    }


    else if(req === "delete"){
        let index = prompt("Enter the index of the task you want to delete:");
        todo.splice(index, 1);
        console.log("Task deleted.");
    }

    req = prompt("Please Enter your task what you want add");    
}

