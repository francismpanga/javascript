let button = document.getElementById("button");
let quotecontent = document.getElementById("quote-content");
let quoteauthor = document.getElementById("quote-author");
// function nextquote() {
//   let quote = document.getElementById("quote");
//   let author = document.getElementById("author");
//   quote.innerHTML = quotes[index];
//   author.innerHTML = authors[index];
//   index++;
//   if (index >= quotes.length) {
//     index = 0;
//   }
// }

let quote1 = {
  quote: "If you can't believe it, you can't believe it.",
  author: "J.K. Rowling",
};

let quote2 = {
  quote: "My father gave me the best advice of my life.",
  author: "MPANGA ",
};
let quote3 = {
  quote: "IIf your ship doesn’t come in, swim out to it!",
  author: " John Hill",
};

let quotes = [quote1, quote2, quote3];

// function nextquote() {
//   quoteindex = Math.floor(Math.random() * quotes.length);
//   quotecontent.textContent = quotes[quoteindex].quote;
//   quoteauthor.textContent = quotes[quoteindex].author;
// } there should always ba a function generated from button onclick

quoteindex = Math.floor(Math.random() * quotes.length);
quotecontent.textContent = quotes[quoteindex].quote;
quoteauthor.textContent = quotes[quoteindex].author;
console.log(quotes[quoteindex].quote);
console.log(quotes[quoteindex].author);

console.log(quoteindex);
