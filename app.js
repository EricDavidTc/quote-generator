const container = document.querySelector("#quote-container");
let quoteText = document.querySelector("#quote");
let quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#twitter");
const loader = document.querySelector(".loader");

// Show loading

loading = () => {
  loader.hidden = false;
  container.hidden = true;
};

// Loading complete

complete = () => {
  container.hidden = false;
  loader.hidden = true;
};

//  Get quote
getQuote = () => {
  quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
};

// Get new quote
getNewQuote = () => {
  loading();
  getQuote();
  //define quote length for lon-quote class
  quoteLength = quote.text.length;

  //check if quote length is greater than 55
  if (quoteLength > 55) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //check for quote.author = null and assign anonymous as quote.author
  if (!quote.author) {
    quote.author = "ANONYMOUS";
    quoteAuthor.innerHTML = quote.author;
  } else {
    quoteAuthor.innerHTML = quote.author;
  }
  // Set Quote, Complete loading
  quoteText.innerHTML = quote.text;
  complete();
};

// Tweet a quote

tweet = () => {
  if (quoteLength < 120) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(twitterUrl);
  } else {
    quoteText.innerHTML = "Too long to tweet";
    quoteAuthor.innerHTML = "Quote Generator";
  }
};

// activate btns
newQuoteBtn.addEventListener("click", getNewQuote);
tweetBtn.addEventListener("click", tweet);
getNewQuote();
