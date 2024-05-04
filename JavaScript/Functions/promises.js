function saveDB(data) {
    let internetSpeed = Math.floor(Math.random() * 10)+1;
    if(internetSpeed > 4){
        console.log("dataBase is Saved");
    }
    else{
        console.log("Internet speed is weak");
    }
}