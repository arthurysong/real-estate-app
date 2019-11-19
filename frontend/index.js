// classes info --------------------------------------------------------------

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
        this.digits = json.digits;
        this.homes = this.homes(json.homes);
    }

    homes(homes){
        const homes_list = [];
        for (const home of homes) {
            const home_instance = new Home(home);
            homes_list.push(home);
        }
        return homes_list;
    }

    get median_homeprice() {
        const sorted_homeprices = this.homes.map((home) => home.price).sort();
        if (sorted_homeprices.length % 2 === 0) {
            const n = sorted_homeprices.length / 2
            return (sorted_homeprices[n - 1] + sorted_homeprices[n]) / 2
        } else {
            const n = sorted_homeprices.length / 2 - .5
            return sorted_homeprices[n];
        }
    }

    get year_built_average(){
        return Math.round(this.homes.reduce((total, home) => total + home.year_built, 0) / this.homes.length)
    }

    get sqft_average(){
        return Math.round(this.homes.reduce((total, home) => total + home.sqft, 0) / this.homes.length)
    }
}

class Home {
    constructor(json){
        this.address = json.address;
        this.bathrooms = json.bathrooms;
        this.bedrooms = json.bedrooms;
        this.price = json.price;
        this.sqft = json.sqft;
        this.year_built = json.year_built;
    }
}







//=============================== executables ==================================================

document.addEventListener('DOMContentLoaded', function(){
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


// ============when zipcode selected and submited===============

const form = document.querySelector('form');
form.addEventListener('submit', function(event){

    event.preventDefault();

    const select = document.querySelector('select');  
    if (select.value !== '-') {
        fetch(`http://127.0.0.1:3000/zipcodes/${select.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                
                const zipcode = new Zipcode(json);
                
                displayZipcodeHeader(zipcode);
                unhideHeaders();
                displayZipcodeStats(zipcode);
                displayListOfHomes(zipcode);

                // displaying info for schools and schools related info ****

            })
    }
})

function unhideHeaders(){
    const h6 = document.querySelector('#homes-sold')
    h6.style.display = 'block';
    const schoolh6 = document.querySelector('#schools-header');
    schoolh6.style.display = 'block';
}

function displayZipcodeHeader(zipcode){
    const h3 = document.querySelector('#zipcode-header');
    h3.innerHTML = zipcode.digits;
}

function displayZipcodeStats(zipcode){
    const info = document.querySelector('#zipcode-info');
        info.innerHTML = 
        `
            median home price: $${zipcode.median_homeprice}<br>
            year built average: ${zipcode.year_built_average}<br>
            sq ft average: ${zipcode.sqft_average}<br>
        `
}

function displayListOfHomes(zipcode){
    const homes_list = document.querySelector('#homes ul')
    homes_list.innerHTML = "";
    for (const home of zipcode.homes) {
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
}