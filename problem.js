
//By adding 0.1 and 0.2,we exactly getfloting point numbers and it doesn't match with 0.3 when we use assignment operator. So it will returns false.
console.log(0.1 + 0.2) //0.30000000000000004
console.log(0.1 + 0.2 == 0.3)


//Problem 2
//Here we are comparing array with string. In this case array will be converted to string and then comparison will be done. So both are same and it will return true.
const user = [1,2,3];
const newUser = "1,2,3";

console.log(user == newUser);



