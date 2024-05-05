// 1. Solving problems using array functions on rest countries data

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(res => {


    // a. Get all the countries from Asia continent/region using Filter method
    
    var asia_Countries = res.filter(country => country.region === 'Asia');

    console.log("Countries in Asia:");
    asia_Countries.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("-----------------------------");
    });

    // b. Get all the countries with a population of less than 2 lakhs using Filter method
    
    var small_Population = res.filter(country => country.population < 200000);   

    console.log("Countries with population less than 2 lakhs:");
    small_Population.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Population:", country.population);
      console.log("-----------------------------");
    });



    // c. Print the following details name, capital, flag, using forEach method

    res.forEach(country => {
        console.log("Name: ", country.name.common);
        console.log("Capital: ", country.capital);
        console.log("Flag: ", country.flags.png);
        console.log("-------------------------");
      });



    // d. Print the total population of countries using reduce method
    
    var total_Population = res.reduce((acc, country) => acc + country.population, 0);

    console.log("Total population of countries:");
    console.log("Total population:" ,total_Population);
    console.log("-------------------------");
    
    
    
    // e. Print the country that uses US dollars as currency

    var Dollar_Countries = res.filter(country => {
      return country.currencies && country.currencies.USD;
    });

    console.log("Countries using US dollars as currency:");
    Dollar_Countries.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Currency:", country.currencies.USD.name);
      console.log("-----------------------------");
    });
  });