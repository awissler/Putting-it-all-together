function renderRandomQuote(QUOTES) {
  var tbody = document.querySelector("tbody");
  for (var i = 0; i < QUOTES.length; i++) {
    var quote = QUOTES[i];
    var quoteContent = document.createTextNode(quote.content + " ~" + quote.title);
    tbody.appendChild(quoteContent);
  }
  return tbody;
}

var quoteOutput = document.getElementById("quote-output");
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function() {
  quoteOutput.textContent = "";
  QUOTES.length = 1;
  quoteOutput.textContent = renderRandomQuote(QUOTES);
});
