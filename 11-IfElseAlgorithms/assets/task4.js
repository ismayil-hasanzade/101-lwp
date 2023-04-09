alert(
  "Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram"
);
var n = prompt("Eded ve ya simvol daxil edin");

if (isNaN(parseInt(n))) {
  console.log("Daxil edilən məlumat hərf və ya simvoldur");
} else {
  console.log("Daxil edilən məlumat rəqəmdir");
}
