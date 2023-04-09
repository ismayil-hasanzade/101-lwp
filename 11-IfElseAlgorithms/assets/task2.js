alert(
  "3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram!!! Ededleri Daxil edin"
);
var a = prompt("a");
var b = prompt("b");
var c = prompt("c");
if (a >= b && b >= c) {
  let big_sum = a + b + c;
  let little_sum = c + b + a;
  var Big_number = Number(big_sum);
  var Little_number = Number(little_sum);
  console.log("Big_number", Big_number);
  console.log("Little_number", Little_number);
} else if (b >= c && c >= a) {
  let big_sum = b + c + a;
  let little_sum = a + c + b;
  var Big_number = Number(big_sum);
  var Little_number = Number(little_sum);
  console.log("Big_number", Big_number);
  console.log("Little_number", Little_number);
}
