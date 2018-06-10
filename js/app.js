
var quoteOutput = document.getElementById("quote-output");
var generateButton = document.getElementById("generate");

function renderRandomQuote(QUOTES) {
  var quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  return quote.content + " ~" + quote.title;
}

generateButton.addEventListener("click", function() {
  quoteOutput.textContent = "";
  quoteOutput.textContent = renderRandomQuote(QUOTES);
});
