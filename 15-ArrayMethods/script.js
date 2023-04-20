let arr = ["lankaran", "baki", "masalli", "lerik", "astara"];
let arr2 = ["mandalin", "limon"];
function func(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i].length >= 3) {
      text[i] = text[i].substring(0, 3);
    } else {
      text[i] = text[i];
    }
  }
  return text;
}

function RemoveElement(arr) {
  return arr.filter(function (element) {
    return element.charAt(0) !== "l";
  });
}

function replaceword(ary, new_arry) {
  new_arry.push(arr[1])
  arr[1]= new_arry
  return ary;
}
console.log("Arry:", arr);
console.log("Task1", func(arr));
console.log("Task2", RemoveElement(arr));
console.log("Task3", replaceword(arr, arr2));
