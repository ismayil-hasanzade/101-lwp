alert(
  "3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram !!!! Ededleri Daxil Edin"
);
let a = +prompt("a");
let b = +prompt("b");
let c = +prompt("c");
let sum_ab = a + b;
let sum_bc = b + c;
let sum_ac = a + c;
if (sum_ab > sum_ac && sum_ab > sum_bc) {
  console.log("Big sum result", a, "and", b);
} else if (sum_bc > sum_ac && sum_bc > sum_ab) {
  console.log("Big sum result", b, "and", c);
} else {
  console.log("Big sum", a, "and", c);
}
