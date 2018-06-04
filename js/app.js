const randomQuoteAPI =
  "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

const mymap = L.map("mapid").setView([47.6553, -122.3051], 13);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A"
  }
).addTo(mymap);

function parseAsJSON(response) {
  return response.json();
}

function handleError(err) {
  console.error(err);
  alert(err.message);
}

function renderRandomQuote(data) {
  for (var i = 0; i < data.length; i++) {
    var title = data[i].title;
    if (title === undefined) {
      return false;
    }
    var content = data[i].content;
    if (content === undefined) {
      return false;
    }
    var marker = L.marker();

    function onMapClick(e) {
      marker
        .bindPopup("<i>" + content + "</i>" + "<b>" + title + "</b>")
        .openPopup();
    }

    mymap.on("click", onMapClick);
  }
}

fetch(randomQuoteAPI)
  .then(parseAsJSON)
  .then(renderRandomQuote)
  .catch(handleError);
