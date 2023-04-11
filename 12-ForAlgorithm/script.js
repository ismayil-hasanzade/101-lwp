let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
let boshluq = 0;
let vergul = 0;
let noqte = 0;

for (let i = 0; i < sampleNews.length; i++) {
  if (sampleNews[i] == " ") {
    boshluq++;
  }
  if (sampleNews[i] == ",") {
    vergul++;
  }
  if (sampleNews[i] == ".") {
    noqte++;
  }
}
console.log("Boshluqlarin sayi", boshluq);
console.log("Vergul sayi", vergul);
console.log("Noqte", noqte);
