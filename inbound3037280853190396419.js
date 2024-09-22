// Persona Storage:
var persona1name = "Maria Delos Santos Las Marias";
var persona1age = 25;
var persona1address = "Upper Session Road, Baguio City, Benguet";

var persona2name = "Juan Gamoso Dela Cruz";
var persona2age = 28;
var persona2address = "San Nicolas, Candon City, Ilocos Sur";

// Rearrange Name Sequence 
var p1nameRearrange = persona1name.split(" ");
let p2nameRearrange = persona2name.split(" ");

// Variable Manipulations:
var p1namelength = persona1name.length;
let p2namelength = persona2name.length;
var p1addlength = persona1address.length;
let p2addlength = persona2address.length;

// Operations
let sumOfall = persona1age + persona2age + p1namelength + p2namelength + p1addlength + p2addlength;
let p1Addp2 = persona1age + persona2age;
let subtractp1 = p1Addp2 - p1namelength;
let multiplyp2 = subtractp1 * p2namelength;
let p1ToThePowerp2 = p1addlength ** p2addlength;


console.log("Name: ", p1nameRearrange[3].toUpperCase(), p1nameRearrange[4].toUpperCase()+",", p1nameRearrange[0] , p1nameRearrange[1] , p1nameRearrange[2]+",", "Age: ",persona1age,"address: ", persona1address);
console.log("Name: ", p2nameRearrange[2].toUpperCase(), p2nameRearrange[3].toUpperCase()+",", p2nameRearrange[0] , p2nameRearrange[1]+",", "Age: ",persona2age,"address: ", persona2address);


console.log(sumOfall);
console.log(p1Addp2);
console.log(subtractp1);
console.log(multiplyp2);
console.log(p1ToThePowerp2);
console.log(p1addlength);
console.log(p2addlength);
console.log(p1namelength);
console.log(p2namelength);
console.log(persona1age);
console.log(persona2age);
console.log(persona1address);
console.log(persona2address);


