sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen. Since then, you gradually realize that you have put too much effort into one thing: modifying the application. Even when implementing a simple task, it also requires understanding the whole system. You can’t blame them for changes or new features since they are inevitable parts of software development. So, what is the main problem here? The obvious answer could be derived from the application’s design. Keeping the system design as clean and scalable as possible is one of the critical things that any professional developer should dedicate their time to. And that’s where SOLID design principles come into play. It helps developers eliminate design smells and build the best designs for a set of features. Although the SOLID design principles were first introduced by the famous Computer Scientist Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, its acronym was introduced later by Michael Feathers. Uncle Bob is also the author of best-selling books Clean Code, Clean Architecture, Agile Software Development: Principles, Patterns, and Practices.`;
const elifba = /^[a-zA-ZÂâÎîİıÇçŞşÜüÖöĞğ]/;
function UpperCaseWords(text) {
  const words = text.split(" ");
  const arry = [];
  for (let i = 0; i < words.length; i++) {
    const firstChar = words[i][0];
    if (firstChar === firstChar.toUpperCase() && firstChar.match(elifba)) {
      arry.push(words[i]);
    }
  }
  return arry;
}

function RandomFunc(text) {
  let arry = text.split(/[.?!,]/);
  let number = Math.floor(Math.random() * (arry.length + 1));
  if (
    arry[number].replaceAll(" ", "").length >= 30 &&
    arry[number].replaceAll(" ", "").length <= 40
  ) {
    return arry[number];
  } else {
    return RandomFunc(text);
  }
}

function Count(count) {
  say = 0;
  for (let i = 0; i < count.length; i++) {
    if (count[i].match(elifba)) {
      say++;
    }
  }
  return say;
}
console.log("Task1", UpperCaseWords(sampleNews));
console.log("Task2", RandomFunc(sampleNews));
console.log("Task3", Count(sampleNews));
