/*Names: Store the names of a few of
 your friends in a array called names.
  Print each person’s name by accessing
  each element in the list, one at a time*/
// Define an array of names
var names = ["ali", "basit", "curnoo", "dani", "elee"];
//loop
for (var index = 0; index < names.length; index++) {
    console.log(names[index]);
}
//for each
names.forEach(function (friend) {
    console.log(friend);
});
//forloop
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var moonName = names_1[_i];
    console.log(moonName);
}
