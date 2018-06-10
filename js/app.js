
var quoteOutput = document.getElementById("quote-output");
var generateButton = document.getElementById("generate");

function renderRandomQuote(QUOTES) {
  var tbody = document.querySelector("tbody");
  for (var i = 0; i < QUOTES.length; i++) {
    var quote = QUOTES[i];
    var quoteContent = document.createTextNode(quote.content + " ~" + quote.title);
    tbody.appendChild(quoteContent);
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }
  return tbody;
}

generateButton.addEventListener("click", function() {
  quoteOutput.textContent = "";
  quoteOutput.textContent = renderRandomQuote(QUOTES);
});
