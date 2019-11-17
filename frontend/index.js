class City {
    constructor (name, gdp_per_capita, job_growth_percentage, population, median_homeprice) {
        this.name = name;
        this.gdp_per_capita = gdp_per_capita;
        this.job_growth_percentage = job_growth_percentage;
        this.population = population;
        this.median_homeprice = median_homeprice;
    }
}

class Zipcode {
    constructor (json){
        this.zipcode = json.zipcode;
        this.home_prices = this.class.home_prices(json.homes);
        
    }

    static home_prices(homes){
        const home_prices = [];
        for (const home of homes){
            home_prices.push(home.price);
        }
        return home_prices;
    }

    static calculate_median_homeprice(homes) {
        const home_prices = [];
        for (const home of homes) {

        }
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
    if (select.value !== '-') {
        fetch(`http://127.0.0.1:3000/zipcodes/${select.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                const div = document.querySelector('div#zipcode');
                const image = document.createElement('img');
                image.src = "https://www.google.com/maps/vt/data=eUtTyowChxJsJCc8buLSYno30XHMulyA_z2dzQQzZHmj6-TpsseIMsrPeKTQcSPM-ctg9axD9nwjzxbTuBsjvt8NclWwHaoCqIW2ZRt6NuLA6jywxnyFVTwrTTgL3rAN2UfVi14-ELAU4x7El0XUEHzqIQq6R_JnYfT2Sp-h_naZ6_vLK57Yyag3iAWNX73Lc00gRQvJA_M73zZj-9ejrQ";
                div.appendChild(image);
                const h3 = div.querySelector('h3');
                h3.innerHTML = json.digits;
                const h6 = document.querySelector('#homes-sold')
                h6.style.display = 'block';
                const homes_list = div.querySelector('#homes ul')

                for (const home of json.homes) {
                    const li = document.createElement('li');
                    li.innerHTML = 
                        `
                        $${home.price}<br>
                        ${home.address}<br>
                        ${home.bedrooms} bds | ${home.bathrooms} ba | ${home.sqft} sqft<br>
                        year built: ${home.year_built}
                        `;
                    homes_list.appendChild(li);
                } 
            })
    }
})

// function loadZipcodeInfo(){

// }