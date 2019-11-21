// classes info --------------------------------------------------------------

class City {
    constructor (json) {
        this.name = json.name;
        this.gdp_per_capita = json.gdp_per_capita;
        this.job_growth_percentage = json.job_growth_percentage;
        this.population = json.population;
        this.median_homeprice = json.median_homeprice;
    }
}

class Zipcode {
    constructor (json){
        this.digits = json.digits;
        this.homes = this.returnHomeInstancesList(json.homes);
        this.schools = this.returnSchoolInstancesList(json.schools)
    }

    returnHomeInstancesList(homes_json){
        const homes_list = [];
        for (const home of homes_json) {
            const home_instance = new Home(home);
            homes_list.push(home_instance);
        }
        return homes_list;
    }

    returnSchoolInstancesList(schools_json){
        const schools_list = [];
        for (const school of schools_json){
            const school_instance = new School(school);
            schools_list.push(school_instance);
        }
        return schools_list;
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

    get school_rating_average(){
        return (this.schools.reduce((total, school) => total + school.rating, 0) / this.schools.length)
    }
}
//a;lsdjkflaksdjf;lk;alsdkjflaksd

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

class School {
    constructor(json){
        this.name = json.name;
        this.rating = json.rating;
    }
}





//=============================== executables ==================================================

const city_form = document.querySelector('#city-form');
const zipcode_form = document.querySelector('#zipcode-form');

const city_select = city_form.querySelector('select');
const zipcode_select = zipcode_form.querySelector('select');

//==== when document finished loading =======================================

document.addEventListener('DOMContentLoaded', function(){
    fetch('http://127.0.0.1:3000/cities')
        .then(resp => resp.json())
        .then(json => {

//create select menu different options of cities on load ====================================

            console.log(json)
            
            for (const city of json) {
                const option = document.createElement('option')
                option.innerHTML = city.name;
                option.value = city.id;
                city_select.appendChild(option);
            }
            // const city = new City(json);
            // h1.innerHTML = city.name;
            // p.innerHTML = 
            //     `GDP per capita: ${city.gdp_per_capita}<br>
            //     job growth in past year: ${city.job_growth_percentage}%<br>
            //     population: ${city.population}<br>
            //     median price of home: ${city.median_homeprice}`
            // select = document.querySelector('select');
            // for (const zipcode of json.zipcodes){
            //     option = document.createElement('option');
            //     option.innerHTML = zipcode.digits
            //     option.value = zipcode.id
            //     select.appendChild(option);
            // }
        });
})

// =============when city is selected and submitted = = = = = = = 

city_form.addEventListener('submit', function(event){

    event.preventDefault();
    if (city_select.value !== '-') {
        fetch(`http://127.0.0.1:3000/cities/${city_select.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);

                const city = new City(json);
                displayCityInfo(city);
                unhideZipcodeDiv();
            })
    }
})

function displayCityInfo(city) {
    const h1 = document.querySelector('#city h1');
    const p = document.querySelector('#city p');

    h1.innerHTML = city.name;
    p.innerHTML = 
        `GDP per capita: ${city.gdp_per_capita}<br>
        job growth in past year: ${city.job_growth_percentage}%<br>
        population: ${city.population}<br>
        median price of home: ${city.median_homeprice}`
}

function unhideZipcodeDiv(){
    const div = document.querySelector('#zipcode');
    div.className = "";
}

// ============when zipcode selected and submited===============

zipcode_form.addEventListener('submit', function(event){

    event.preventDefault();

    if (zipcode_select.value !== '-') {
        fetch(`http://127.0.0.1:3000/zipcodes/${zipcode_select.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                
                const zipcode = new Zipcode(json);
                
                displayZipcodeHeader(zipcode);
                unhideHeaders();
                displayZipcodeStats(zipcode);
                displayListOfHomes(zipcode);
                displayListOfSchools(zipcode);
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
            school rating average: ${zipcode.school_rating_average}
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

function displayListOfSchools(zipcode){
    const schools_list = document.querySelector('#schools ul')
    schools_list.innerHTML = "";
    for (const school of zipcode.schools){
        const li = document.createElement('li');
        li.innerHTML = `${school.name}, rated ${school.rating}/10`;
        schools_list.appendChild(li);
    }
}