const fetch = require("node-fetch");

fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const asiaCountries = data.filter(country => country.region === "Asia");
        console.log("Countries from Asia:", asiaCountries.map(country => country.name.common));

        const smallPopulationCountries = data.filter(country => country.population < 200000);
        console.log("Countries with population less than 2 lakhs:", smallPopulationCountries.map(country => country.name.common));

        data.forEach(country => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital ? country.capital[0] : "N/A");
            console.log("Flag:", country.flags ? country.flags.png : "N/A");
            console.log("-----------------------------------");
        });

        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log("Total population of countries:", totalPopulation);


        const usDollarCountries = data.filter(country => {
            const currencies = Object.values(country.currencies);
            return currencies.includes("USD");
        });
        console.log("Countries that use US dollars as currency:", usDollarCountries.map(country => country.name.common));
    })
    .catch(error => console.log("Error fetching data:", error));


    const asianCountries = countriesData.filter(country => country.region === "Asia");

    const countriesWithPopulationLessThan2Lakh = countriesData.filter(country => country.population < 200000);

    countriesData.forEach(country => {
    console.log(`Name: ${country.name.common}, Capital: ${country.capital[0]}, Flag: ${country.flags.svg}`);
    });

    const totalPopulation = countriesData.reduce((total, country) => total + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    const countryWithUSD = countriesData.find(country => country.currencies && country.currencies.USD);
    if (countryWithUSD) {
    console.log(`Country that uses US Dollars as currency: ${countryWithUSD.name.common}`);
    } else {
    console.log("No country uses US Dollars as currency.");
}
