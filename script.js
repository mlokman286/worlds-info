fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const country = data[i];
            const allCountry = id('countries')
            allCountry.style.maxHeight = "700px"
            const countries = document.createElement('div');
            countries.className ="info-link"
            countries.innerText =`(${i+1}) ${country.name}`;
            allCountry.appendChild(countries)

            countries.addEventListener('click', function () {
                const countryInfo = document.getElementById('countries-info')
                countryInfo.innerHTML =`
                <h1 class="text-center">${country.name}</h1><hr>
                    <p><b>Name:</b> ${country.name}</p>
                    <p><b>Region:</b> ${country.region}</p>
                    <p><b>Subregion:</b> ${country.subregion}</p>
                    <p><b>Languages:</b> ${country.languages[0].name}</p>
                    <p><b>flag: </b><img class="w-25 shadow-lg" src="${country.flag}" alt=""></p>
                    <p><b>Population: </b> ${country.population} </p>
                    <p><b>AltSpellings: </b><span id="altSpellings"> ${country.altSpellings}</p>
                    <p><b>Timezones:</b> ${country.timezone}</p>
                    <p><b>Area:</b> ${country.area}</p>
                    <p><b>Calling-codes:</b> ${country.callingCodes}</p>
                    <p><b>Capital:</b> ${country.capital}</p>
                    <p><b>Currencies:</b> ${country.currencies[0].code}, ${country.currencies[0].name}</p>
                    `  
            })
        }
        function id(name) {
            return document.getElementById(name);
        }
    })
