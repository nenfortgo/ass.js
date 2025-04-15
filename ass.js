// NUMBER1 PALINDROME STRINS

function printPalindromePattern(str, lines) {
    for (let i = 1; i <= lines; i++) {
      let pattern = str.repeat(i);
      console.log(pattern);
    }
  }
  
  printPalindromePattern("bob", 4);

//   NUMBER 2 
let numbers = [1, 2, 100, -1];

let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("The maximum number is:", max);

// NUMBER 3
let factorial =1;
for (let i =1 ; i<10;i++){
    factorial *=i;
}
console.log('factorials of 10',
    factorial
)

// NUMBER 4
let number = [2, 4, 6, 8, 20];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum is:", sum);

//   NUMBER 5
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  const input = "Hello, how are you?";
  console.log("Total vowels:", countVowels(input));

//   NUMBER 6
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
  
    
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  
  console.log(isPrime(11)); 
  console.log(isPrime(20));  
   

//   NUMBER 7

let array = [1, 2, 3, 4, 5];

let multipliedByThree = [];

for (let i = 0; i < array.length; i++) {
  multipliedByThree.push(array[i] * 3);
}

console.log("New array:", multipliedByThree);

// NUMBER 8
let arrOfnumbers = [10, 20, 30, 40, 50];
for (let i= 0;i < arrOfnumbers.length;i++){
    console.log("OUTPUT",i,arrOfnumbers[i]);
}






// NUMBER 9
let array1 = [0, 4, 6];
let array2 = [1, 2, 3];

let mergedArray = array1.concat(array2);


let ascending = [...mergedArray].sort((a, b) => a - b);


let descending = [...mergedArray].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);

// NUMBER 10
let adashe = [
    {name:"Joseph Adams",
     amount:1000,   
    }
]

// Add a new member
function addMember(name, amount) {
    adashe.push({ name, amount });
  }
  addMember("nenfort neno", 400)
  addMember("Nenpez Enrit", 400)
  addMember("Pascal Gontin", 400)
  addMember("Feduwa Isaac", 400)
  addMember("Toms Jana", 400)
  addMember("Tamie Pure", 400)
  console.log('AFTER ADDING NEW MEMBERS',adashe);
  
  
  
  // Add to a member's amount
  function deposit(name, amount) {
    const member = getMember(name);
    if (member) {
      member.amount += amount;
    } else {
      console.log("Member not found.");
    }
  }
  deposit("Nenpez Enrit", 500)
  deposit("nenfort neno", 9000)
  deposit("Tamie Pure", 700)
  deposit("Pascal Gontin", 600)
  console.log("AFTER DEPOSITING",adashe);
  
  // Withdraw from a member's amount
  function withdraw(name, amount) {
    const member = getMember(name);
    if (member) {
      if (member.amount >= amount) {
        member.amount -= amount;
      } else {
        console.log("Insufficient funds.");
      }
    } else {
      console.log("Member not found.");
    }
  }
  withdraw("nenfort neno", 1200)
  withdraw("Tamie Pure", 500)
  withdraw("Joseph Adams", 150)
  console.log("AFTER WITHDRAWAL",adashe);
  
  
  // Remove a member
  function removeMember(name) {
    adashe = adashe.filter(member => member.name !== name);
  }
  removeMember("Toms Jana")
  console.log('AFTER REMOVING A MEMBER',adashe);



  // Get a member by name
  function getMember(name) {
    return adashe.find(member => member.name === name);
  }
  getMember("Nenpez Enrit")
  console.log("GET MEMBER",adashe);
  
  
  let obj1 = {name: "test"}
  let obj2 = {traget: "web2"}
  let obj3 = {mode: "game"}
  
  console.log("Before: ", obj3)
  Object.assign(obj3, obj2, obj1)
  console.log("after: ", obj3);