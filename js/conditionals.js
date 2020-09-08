/* Write a program which will check three variables (are they declared and assigned a value)
and if they are it will log their sum, and if only one of those is not assigned a value it will 
log "Sorry, you are missing at least one value"
*/

/* Write a program which is very similar to the first just instead of the if-else structure use
if-elseif-else structure
*/

/* Write similar program to the first one, but instead using the if-else statement use switch statement
 */

const a = 10;
const b = 15;
const c = 20;

if (a < b && b < c) {
  console.log(a + b + c);
} else {
  console.log("Sorry, you are missing at least one value");
}

if (a > b && b < c) {
  console.log(a + b + c);
} else if (a > b && b > c) {
  console.log(a + b * c);
} else {
  console.log("Sorry, you are missing at least one value");
}

switch (false) {
  case a > b && b < c:
    console.log(a + b + c);
    break;
  case a > b && b > c:
    console.log(a + b * c);
    break;
  default:
    console.log("Sorry, you are missing at least one value");
}

const job = "teacher";

switch (job) {
  case "teacher":
  case "instructor":
    console.log("John is a " + job);
    break;
  case "driver":
    console.log("John is a " + job);
    break;
  default:
    console.log("John does something else!");
}
