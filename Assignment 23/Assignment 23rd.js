const matatus = [
    {
      routes: ["Nakuru-Eldoret", "Nakuru-Naivasha"],
      color: "Yellow",
      capacity: 30,
      plateNumber: "KCB 234X"
    },
    {
      routes: ["Nakuru-Nairobi", "Nakuru-Gilgil"],
      color: "Blue",
      capacity: 40,
      plateNumber: "KAA 123Y"
    },
    {
      routes: ["Nakuru-Limuru", "Nakuru-Njoro", "Nakuru-Subukia"],
      color: "Green",
      capacity: 45,
      plateNumber: "KAB 123X"
    },
    {
      routes: ["Nakuru-Kiambu", "Nakuru-Maai Mahiu"],
      color: "Red",
      capacity: 35,
      plateNumber: "KAC 123Y"
    },
    {
      routes: ["Nakuru-Salgaa", "Nakuru-Rongai"],
      color: "Orange",
      capacity: 25,
      plateNumber: "KAD 123X"
    },
    {
      routes: ["Nakuru-Nyeri", "Nakuru-Nyandarua"],
      color: "Purple",
      capacity: 38,
      plateNumber: "KAE 123Y"
    },
    {
      routes: ["Nakuru-Kericho", "Nakuru-Bomet"],
      color: "Pink",
      capacity: 42,
      plateNumber: "KAF 123X"
    },
    {
      routes: ["Nakuru-Narok", "Nakuru-Naivasha"],
      color: "Brown",
      capacity: 30,
      plateNumber: "KAG 123Y"
    },
    {
      routes: ["Nakuru-Turkana", "Nakuru-Marsabit"],
      color: "White",
      capacity: 50,
      plateNumber: "KAH 123X"
    },
    {
      routes: ["Nakuru-Kisumu", "Nakuru-Siaya"],
      color: "Black",
      capacity: 45,
      plateNumber: "KAI 123Y"
    }
  ];

  /*
1. Access the second route of the third matatu.

const secondRouteOfThirdMatatu = matatus[2].routes[1];
console.log(secondRouteOfThirdMatatu); // Output: Nakuru-Njoro

2. Get the color of the last matatu. 
const colorOfLastMatatu = matatus[matatus.length - 1].color;
console.log(colorOfLastMatatu); // Output: Black

2. Iterate over the array and print the plate number and color of each matatu e.g. KAI 123
matatus.forEach(matatu => {
  console.log(`Plate Number: ${matatu.plateNumber}, Color: ${matatu.color}`);
});

3. Find the matatu with the highest capacity.
const matatuWithHighestCapacity = matatus.reduce((max, matatu) => {
  return matatu.capacity > max.capacity ? matatu : max;
}, matatus[0]);

console.log(matatuWithHighestCapacity); // Output: { routes: ["Nakuru-Turkana", "Nakuru-Marsabit"], color: "White", capacity: 50, plateNumber: "KAH 123X" }

4. Check if the fifth matatu has the route "Nakuru-Eldoret".
const hasRoute = matatus[4].routes.includes("Nakuru-Eldoret");
console.log(hasRoute); // Output: false

5. Add a new route "Nakuru-Mombasa" to the seventh matatu.
matatus[6].routes.push("Nakuru-Mombasa");
console.log(matatus[6].routes); // Output: ["Nakuru-Narok", "Nakuru-Naivasha", "Nakuru-Mombasa"]

6. Write a function to sort the matatus by their capacity in ascending order.
function sortMatatusByCapacity(matatus) {
  return matatus.slice().sort((a, b) => a.capacity - b.capacity);
}

const sortedMatatus = sortMatatusByCapacity(matatus);
console.log(sortedMatatus);

7. Create a new matatu object with routes ["Nakuru-Kakamega", "Nakuru-Bungoma"], color "Gray", capacity 38, and plate number "KAJ 123Y". Add it to the array.
// Define the new matatu object
const newMatatu = {
  routes: ["Nakuru-Kakamega", "Nakuru-Bungoma"],
  color: "Gray",
  capacity: 38,
  plateNumber: "KAJ 123Y"
};

// Add the new matatu to the array
matatus.push(newMatatu);

// Log the updated array to verify the addition
console.log(matatus);

8. Write a funciton to calculate the average capacity of all matatus.
function calculateAverageCapacity(matatus) {
  const totalCapacity = matatus.reduce((sum, matatu) => sum + matatu.capacity, 0);
  return totalCapacity / matatus.length;
}

const averageCapacity = calculateAverageCapacity(matatus);
console.log(averageCapacity);

9. Write a function to check if any two matatus have the same plate number, returns the plate if found an null if none
function findDuplicatePlateNumber(matatus) {
  const plateNumbers = new Set();
  for (const matatu of matatus) {
    if (plateNumbers.has(matatu.plateNumber)) {
      return matatu.plateNumber;
    }
    plateNumbers.add(matatu.plateNumber);
  }
  return null;
}

const duplicatePlateNumber = findDuplicatePlateNumber(matatus);
console.log(duplicatePlateNumber); // Output: null (if no duplicates)

10. Create a new array containing only the routes of the matatus with a capacity greater than 40.
const routesWithHighCapacity = matatus
  .filter(matatu => matatu.capacity > 40)
  .flatMap(matatu => matatu.routes);

console.log(routesWithHighCapacity);



  */