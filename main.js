const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");

searchButton.addEventListener("click", function(event) {
    event.preventDefault();

    const serachString = searchInput.value;
    const site = "https://aonsrd.com/";

    fetch(`${site}search?q=${serachString}`)
    .then(response => response.text())
    .then(data => {
        resultsContainer.innerHTML = data;
    });
});