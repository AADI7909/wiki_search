let searchE1 = document.getElementById("searchInput");
let searchresults = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendresults(result) {
    let {
        title,
        link,
        description
    } = result;
    let searchContainerE1 = document.createElement("div");
    searchContainerE1.classList.add("result-item");
    searchresults.appendChild(searchContainerE1);

    let AnchorE1 = document.createElement("a");
    AnchorE1.textContent = title;
    AnchorE1.classList.add("result-title");
    AnchorE1.href = link;
    AnchorE1.target = "_blank";
    searchContainerE1.appendChild(AnchorE1);

    let LinebreakE1 = document.createElement("br");
    searchContainerE1.appendChild(LinebreakE1);

    let AnchorE2 = document.createElement("a");
    AnchorE2.textContent = link;
    AnchorE2.classList.add("result-url");
    AnchorE2.href = link;
    AnchorE2.target = "_blank";
    searchContainerE1.appendChild(AnchorE2);

    let LinebreakE2 = document.createElement("br");
    searchContainerE1.appendChild(LinebreakE2);

    let paragraphE1 = document.createElement("p");
    paragraphE1.textContent = description;
    paragraphE1.classList.add("link-description");
    searchContainerE1.appendChild(paragraphE1);

}

function displayResults(searchresult) {
    spinnerE1.classList.toggle("d-none");
    for (let result of searchresult) {
        createAndAppendresults(result);
    }
}

function wikisearch(event) {
    if (event.key === "Enter") {
        searchresults.textContent = "";
        spinnerE1.classList.toggle("d-none");
        let searhinput = searchE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searhinput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchE1.addEventListener("keydown", wikisearch);