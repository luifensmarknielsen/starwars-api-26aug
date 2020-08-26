fetch("https://swapi.dev/api/people/")
    .then(res => res.json())
    .then(function (data) {
        let template = document.querySelector("#template");
        let peopleList = document.querySelector("#peopleList");
        data.results.forEach(function (result) {
            let clone = template.content.cloneNode(true);
            clone.querySelector(".listItem").innerText = result.name;
            peopleList.appendChild(clone);
        });
    });