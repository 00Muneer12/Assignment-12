/*Names: Store the names of a few of
 your friends in a array called names.
  Print each person’s name by accessing 
  each element in the list, one at a time*/
 // Define an array of names

 let names: string[] = ["ali", "basit","curnoo","dani","elee"];
 //loop

 for (let index=0; index <names.length; index++) {
console.log(names[index])
 }
 //for each

 names.forEach (friend =>{
console.log(friend);
 })

 //forloop
 for (const moonName of names)
 console.log(moonName)
