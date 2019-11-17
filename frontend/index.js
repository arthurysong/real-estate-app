class City {
    constructor (name, gdp_per_capita, job_growth_percentage, population, median_homeprice) {
        this.name = name;
        this.gdp_per_capita = gdp_per_capita;
        this.job_growth_percentage = job_growth_percentage;
        this.population = population;
        this.median_homeprice = median_homeprice;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    // h1 = document.$('h1');
    // h1.innerHTML = 
    h1 = document.querySelector('h1');
    p = document.querySelector('p');
    fetch('http://127.0.0.1:3000/cities/1')
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            const city = new City(json.name, json.gdp_per_capita, json.job_growth_percentage, json.population, json.median_homeprice);
            h1.innerHTML = city.name;
            p.innerHTML = 
                `GDP per capita: ${city.gdp_per_capita}<br>
                job growth in past year: ${city.job_growth_percentage}%<br>
                population: ${city.population}<br>
                median price of home: ${city.median_homeprice}`
            select = document.querySelector('select');
            for (const zipcode of json.zipcodes){
                option = document.createElement('option');
                option.innerHTML = zipcode.digits
                option.value = zipcode.id
                select.appendChild(option);
            }
            

        });
})

const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const select = document.querySelector('select');  
    fetch(`http://127.0.0.1:3000/zipcodes/${select.value}`)
        .then(resp => resp.json())
        .then(json => console.log(json))
})

// function loadZipcodeInfo(){

// }