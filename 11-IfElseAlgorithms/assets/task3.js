alert(
  " 3 rəqəmli hər hansı bir ədəd verilib. Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram!!!"
);
while (true) {
  var n = prompt("3 reqemli eded daxil edin");
  if (n > 99 && 999 >= n) {
    let a = parseInt(n / 100);
    let b = parseInt(n / 10) % 10;
    let c = n % 10;
    console.log("Result:", a, b, c);
    break;
  } else {
    alert("Daxil etdiyiniz eded 3 reqemli deyil");
  }
}
