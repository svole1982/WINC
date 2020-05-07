var age = 18;

if (age >= 18) {
  console.log("mag niet naar binnen");
}

if (age < 18) {
  console.log("mag naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("je krijgt 50% korting op je bier");
}

/*  
else {
console.log (Nope, je mag niet naar binnen");

}
*/
var isFemale = true;

if (isFemale) {
  console.log("mag naar binnen");
} else {
  console.log("helaas, geen vrouw");
}

var driverStatus = "bob";

if (driverStatus === "bob") {
  console.log("Je bent Bob, goed bezig pik");
} else {
  console.log("lekker slapen op de achterbank");
}

const name = "Sarah";

if (name === "Sarah" || name === "Bram") {
  console.log("Je naam is Sarah of Bram, je krijgt een gratis biertje!");
} else {
  console.log("Helaas Pindakaaas");
}

const totalAmount = 27;

if (totalAmount >= 100) {
  console.log("bubbels");
} else if (totalAmount > 50) {
  console.log("Nachos met kaas");
} else if (totalAmount > 25) {
  console.log("Vega (helaas) bitterballen");
}
