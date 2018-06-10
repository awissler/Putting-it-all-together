function renderRandomQuote(QUOTES) {
  var tbody = document.querySelector("tbody");
  for (var i = 0; i < QUOTES.length; i++) {
    var quote = QUOTES[i];
    tbody.appendChild(renderQuote(quote));
  }
  return tbody;
}

function renderQuote(quote) {
  var tr = document.createElement("tr");
  tr.appendChild(renderQuoteProp(quote.content + " ~" + quote.title));
  return tr;
}

function renderQuoteProp(content) {
  var td = document.createElement("td");
  td.textContent = content;
  return td;
}

var quoteOutput = document.getElementById("quote-output");
var generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function() {
  quoteOutput.textContent = "";
  QUOTES.length = 1;
  quoteOutput.textContent = renderRandomQuote(QUOTES);
});
