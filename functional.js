// ##########################
// # Higher-Order Functions #
// ##########################


// Challenge 1
// Create a function addTwo that accepts one input and adds 2 to it.
const addTwo = (num) => {
    return num+2
  };
  

console.log("===============Challenge 1===================");
console.log(addTwo(3)); //5
console.log(addTwo(10)); // 12
console.log("===============/Challenge 1===================");

  
// Challenge 2
// Create a function addS that accepts one input and adds an "s" to it.
const addS = (word) => {
    return word + 's'
};

console.log("===============Challenge 2===================");
console.log(addS('pizza'));
console.log(addS('bagel'));
console.log("===============/Challenge 2===================");