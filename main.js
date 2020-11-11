/// <reference path="jquery-3.5.1.js" />

$(function () {
  getCountriesAsync().then((countriesArray) => {
    console.table(countriesArray);
    populateTable(countriesArray);
  });
});

function getCountriesAsync() {
    return $.getJSON("https://restcountries.eu/rest/v2/all");
}

function populateTable(countriesArray) {
    for (let i = 0; i < countriesArray.length; i++) {
        $("tbody").append(
            `<tr>
            <td>
                  ${countriesArray[i].name}
            </td>
            <td>
                  ${countriesArray[i].population}
            </td>
            <td>
                  ${countriesArray[i].area}
            </td>
            <td>
                 <img width="200" src="${countriesArray[i].flag}">
            </td>

        </tr> `
        );
    }
}

