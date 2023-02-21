// Question 3
let classGroup = "Art";
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

if (classGroup == "Science") {
  console.log("Science Subjects: " + scienceSubjects + ", " + generalSubjects);
} else if (classGroup == "Social Science") {
  console.log(
    "Social Science Subjects: " + socialScienceSubjects + ", " + generalSubjects
  );
} else if (classGroup == "Art") {
  console.log("Arts Subjects: " + artsSubjects + ", " + generalSubjects);
} else console.log("General Subjects: " + generalSubjects);

// Question 5

let num = 40;
let powerOf2 = 1;
while (powerOf2 < num) {
  powerOf2 *= 2;
}
let pwr;
if (num < 0) {
  console.log("Positive numbers only");
} else if (Math.abs(num - powerOf2) < Math.abs(num - powerOf2 / 2)) {
  pwr = powerOf2;
} else {
  pwr = powerOf2 / 2;
}

console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);
