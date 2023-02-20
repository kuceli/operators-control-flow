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

let pwr = 0;
let num = 5;
let i = 0;
while (pwr <= num) {
  pwr = 2 ** i;
  i++;
  if (pwr > num) {
    break;
  }
  console.log(pwr);
}
console.log(pwr);

// let result = 0;
// let num = 5;
// let i = 0;
// while (result < num) {
//   result = 2 ** i;
//   i++;
// }
// console.log(result);
