let color = ["red", "yellow", "blue", "pink", "white", "black", "brown"];

console.log(color.splice(2));  // isme array chnage ho jata haii slice me change nhi hota haii..

console.log(color.splice(0,2)); // 0 se start hoke aage vale 2 elements delete kar dega 

console.log(color);
 
console.log(color.splice(0,2,"car","bike"));  // 0 se start hoke aage vale 2 elements delete krke 2 start me new add kar degaa 
console.log(color)

let months = ["januray", "july", "march", "august"];

console.log(months.splice(0,2,"july","june"));
console.log(months);
