const quoteContainer = document.querySelector("#quote-container");
let quoteText = document.querySelector("#quote");
let quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#twitter");
const loader = document.querySelector("#loader");
let apiQuotes = [];

//  Show loading

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Loading complete

function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// New quote

newQuote = () => {
  loading();
  quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check for author name or assign Anonymous if unknown

  if (!quotes.author) {
    quoteAuthor.textContent = "Anonymous";
  } else {
    quoteAuthor.textContent = quotes.author;
  }

  // check for quote length and add/remove .long-quote
  xterlength = quotes.text.length;

  if (xterlength > 55) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  // Set quote, Hide loader

  quoteText.textContent = quotes.text;
  complete();
};

// Get quote from API

async function getQuote() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

tweet = () => {
  if (xterlength < 120) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.text} - ${quotes.author}`;
    window.open(twitterUrl, "_top");
  } else {
    quoteText.innerHTML = "Too long to tweet";
    quoteAuthor.innerHTML = "Quote Generator";
  }
};

newQuoteBtn.addEventListener("click", newQuote);
tweetBtn.addEventListener("click", tweet);

//On Load

getQuote();
