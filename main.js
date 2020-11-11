/// <reference path="jquery-3.5.1.js" />

$(async function () {
  const countries = await getCountriesAsync();
  console.table(countries);
  populateTable(countries);
});

function getCountriesAsync() {
    return new Promise((resolve) => {
        $.getJSON("https://restcountries.eu/rest/v2/all").done(countries => resolve(countries));
    })
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
