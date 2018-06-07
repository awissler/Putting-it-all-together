function renderRandomQuote(random_quote) {
  var tbody = document.querySelector("tbody");
  for (var idx = 0; idx < QUOTES.length; idx++) {
    var quote = QUOTES[idx];
    tbody.appendChild(renderQuote(quote));
  }
}

function renderQuote(quote) {
  var tr = document.createElement("tr");
  tr.appendChild(renderQuoteProp(quote.title));
  tr.appendChild(renderQuoteProp(quote.content));
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
  switch (quoteOutput) {
    case "pulse":
      animateElem.classList.add("pulse");
      animateElem.addEventListener(
        "animationend",
        function() {
          animateElem.classList.remove("pulse");
        },
        { once: true }
      );
  }
});
