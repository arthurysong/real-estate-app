//============================ classes ===================================

class City {
    constructor (json) {
        this.name = json.name;
        this.median_household_income = json.median_household_income;
        this.income_growth = json.income_growth;
        this.job_growth_percentage = json.job_growth_percentage;
        this.population = json.population;
        this.median_age = json.median_age;
        this.median_homeprice = json.median_homeprice;
        this.home_value_growth = json.home_value_growth;

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

class Home {
    constructor(json){
        this.address = json.address;
        this.bathrooms = json.bathrooms;
        this.bedrooms = json.bedrooms;
        this.price = json.price;
        this.sqft = json.sqft;
        this.year_built = json.year_built;
        this.date_sold = json.date_sold;
    }
}

class School {
    constructor(json){
        this.name = json.name;
        this.rating = json.rating;
    }
}





//=============================== executables ======================================
//==============================================================================
//===============================================================================
//=================================================================================

//====================== when document finished loading ============================

const city_select = document.querySelector('#city-select');
const zipcode_select = document.querySelector('#zipcode-select');

document.addEventListener('DOMContentLoaded', function(){
    fetch('http://127.0.0.1:3000/cities')
        .then(resp => resp.json())
        .then(json => {
            console.log(json)

            createOptionsForCities(json, city_select);
            createOptionsForCities(json, city_select2);
        });
})

function createOptionsForCities(json, select){
    for (const city of json) {
        const option = document.createElement('option')
        option.innerHTML = city.name;
        option.value = city.id;
        select.appendChild(option);
    }
}

// =========================== selecting a city ===========================

const city_info = document.querySelector('#city-info');

city_select.addEventListener('change', function(){
    if (city_select.value !== '-') {
        fetch(`http://127.0.0.1:3000/cities/${city_select.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);

                const city = new City(json);

                resetZipcodeDiv();
                showZipcodeDiv();
                displayCityInfo(city, city_info);
                createOptionsForZipcodes(json.zipcodes);
            })
    } else {
        makeCityInfoBlank(city_info);
        resetZipcodeDiv();
    }
})

function resetZipcodeDiv(){
    hideZipcodeDiv();
    resetZipcodeSelect();
    makeZipcodeInfoBlank();
    hideButtons();
    hideLists();
    resetLists();
}

function resetLists(){
    const homes_list = document.querySelector('#homes ul');
    const schools_list = document.querySelector('#schools ul');
    homes_list.innerHTML = '';
    schools_list.innerHTML = '';
}

function resetZipcodeSelect(){
    zipcode_select.innerHTML = `<option val='-'>-</option>`
}

function hideLists(){
    const homes_div = document.querySelector('#homes');
    const schools_div = document.querySelector('#schools');
    homes_div.classList.add('hidden');
    schools_div.classList.add('hidden');
}

function hideButtons(){
    const buttons_div = document.querySelector('#zipcode-info-buttons');
    buttons_div.classList.add('hidden');
}

function makeZipcodeInfoBlank(){
    const h3 = document.querySelector('#zipcode-header');
    const p = document.querySelector('#zipcode-info');
    h3.innerHTML = '';
    p.innerHTML = '';
}

function makeCityInfoBlank(city_div){
    city_div.querySelector('h1').innerHTML = '';
    city_div.querySelector('p').innerHTML = '';    
}

function showZipcodeDiv(){
    const div = document.querySelector('#zipcode');
    div.classList.remove('hidden');
}

function hideZipcodeDiv(){
    const div = document.querySelector('#zipcode');
    div.classList.add('hidden');
}

function displayCityInfo(city, city_div) {
    city_info.classList.remove('hidden');    
    const h1 = city_div.querySelector('h1');
    const p = city_div.querySelector('p');
    
    h1.innerHTML = city.name;
    p.innerHTML = 
        `Median Household Income: $${numberWithCommas(city.median_household_income)} (${city.income_growth}% Growth)<br>
        Job Growth: ${city.job_growth_percentage}%<br>
        Population: ${numberWithCommas(city.population)}<br>
        Median Age: ${city.median_age}<br>
        Median Property Value: $${numberWithCommas(city.median_homeprice)} (${city.home_value_growth}% Growth)`
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createOptionsForZipcodes(zipcodes){
    for (const zipcode of zipcodes){
        option = document.createElement('option');
        option.innerHTML = zipcode.digits
        option.value = zipcode.id
        zipcode_select.appendChild(option);
    }
}

// ======================== selecting a zipcode ============================

let curr_zipcode; //I need this later in the code
zipcode_select.addEventListener('change', function(){
    
    if (zipcode_select.value !== '-') {
        fetch(`http://127.0.0.1:3000/zipcodes/${zipcode_select.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                
                curr_zipcode = new Zipcode(json);
                resetZipcodeInfo();
                
                displayAllZipcodeInfo(curr_zipcode);
            })
    } else {
        resetZipcodeInfo();
    }
})

function displayAllZipcodeInfo(zipcode){
    unhideHeaders();
    unhideButtons();
    displayZipcodeStats(zipcode);
    displayZipcodeHeader(zipcode);
    displayListOfHomes(zipcode);
    displayListOfSchools(zipcode);
}

function resetZipcodeInfo(){
    makeZipcodeInfoBlank();
    hideButtons();
    hideLists();
    resetLists();
}

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
            Median Property Price: $${numberWithCommas(zipcode.median_homeprice)}<br>
            Average Year Built: ${zipcode.year_built_average}<br>
            Average SQFT: ${numberWithCommas(zipcode.sqft_average)}<br>
            Average School Rating: ${zipcode.school_rating_average}
        `
}

function displayListOfHomes(zipcode){
    const homes_list = document.querySelector('#homes ul')
    homes_list.innerHTML = "";
    for (const home of zipcode.homes) {
        const li = document.createElement('li');
        li.innerHTML = 
            `
            Sold on ${home.date_sold}<br>
            $${numberWithCommas(home.price)}<br>
            ${home.address}<br>
            ${home.bedrooms} bds | ${home.bathrooms} ba | ${numberWithCommas(home.sqft)} sqft<br>
            Year Built: ${home.year_built}<br><br>
            `;
        homes_list.appendChild(li);
    } 
}

function displayListOfSchools(zipcode){
    const schools_list = document.querySelector('#schools ul')
    schools_list.innerHTML = "";
    for (const school of zipcode.schools){
        const li = document.createElement('li');
        li.innerHTML = `${school.name}, rated ${school.rating}/10<br><br>`;
        schools_list.appendChild(li);
    }
}

function unhideButtons() {
    const buttons_div = document.querySelector('#zipcode-info-buttons');
    buttons_div.classList.remove('hidden');
}

//========================= toggling home and school lists ==================

const homes_button = document.querySelector('#see-homes');
const homes_div = document.querySelector('#homes');
const schools_button = document.querySelector('#see-schools');
const schools_div = document.querySelector('#schools');
const possible_div = document.querySelector('#possible-lists');

createEventListenerForButton(homes_button, homes_div);
createEventListenerForButton(schools_button, schools_div);

function createEventListenerForButton(button, div){
    button.addEventListener('click', function(event){
        event.preventDefault();

        toggleDiv(div);
        hideOtherDivs(div);
    })
}

function toggleDiv(div) {
    if (div.classList.contains('hidden')) {
        div.classList.remove('hidden')
    } else {
        div.classList.add('hidden');
    }
}

function hideOtherDivs(current_showing_div) {
    for (const list_div of possible_div.children) {
        if (list_div !== current_showing_div) {
            list_div.classList.add('hidden');
        }
    }
}


//================== adding a home =======================================

const add_home = document.querySelector('#add-home');
const new_home_div = document.querySelector('#new-home-div')
const new_home_submit = document.querySelector('#new-home-submit')
const new_home_form = new_home_div.querySelector('form')
const hide_new_home_form = document.querySelector('#hide-new-home-form')

addListenerForHideLink(hide_new_home_form, new_home_div);
addListenerForAddLink(add_home, new_home_div);

new_home_submit.addEventListener('click', function(event){
    event.preventDefault();
    
    const home_json = {
        zipcode_id: document.querySelector('#zipcode-select').value,
        address: new_home_form.querySelector('#address').value,
        bathrooms: new_home_form.querySelector('#bathrooms').value,
        bedrooms: new_home_form.querySelector('#bedrooms').value,
        price: new_home_form.querySelector('#price').value,
        sqft: new_home_form.querySelector('#sqft').value,
        year_built: new_home_form.querySelector('#year-built').value,
        date_sold: new_home_form.querySelector('#date-sold').value
    }

    configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(home_json)
    }

    fetch('http://127.0.0.1:3000/homes', configObject) 
        .then(resp => resp.json())
        .then(json => {
            console.log(json);

            curr_zipcode = new Zipcode (json);
            
            displayAllZipcodeInfo(curr_zipcode);
            refreshForm(new_home_form);  
        })
})

// ========================= adding a city ===========================================


const add_city = document.querySelector('#add-city');
const new_city_div = document.querySelector('#new-city-div');
const hide_new_city_form = document.querySelector('#hide-new-city-form');
const new_city_submit = document.querySelector('#new-city-submit');
const new_city_form = new_city_div.querySelector('form');

addListenerForAddLink(add_city, new_city_div);
addListenerForHideLink(hide_new_city_form, new_city_div);

new_city_submit.addEventListener('click', function(event){
    event.preventDefault();

    const city_json = {
        name: new_city_form.querySelector('#name').value,
        median_homeprice: new_city_form.querySelector('#median-homeprice').value,
        home_value_growth: new_city_form.querySelector('#home-value-growth').value,
        population: new_city_form.querySelector('#population').value,
        median_age: new_city_form.querySelector('#median-age').value,
        median_household_income: new_city_form.querySelector('#median-household-income').value,
        income_growth: new_city_form.querySelector('#income-growth').value,
        job_growth_percentage: new_city_form.querySelector('#job-growth-percentage').value
    }

    configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(city_json)
    }

    fetch('http://127.0.0.1:3000/cities', configObject)
        .then(resp => resp.json())
        .then(json => {
            console.log(json);

            refreshForm(new_city_form);
            updateCityOptions();
        })
})

function updateCityOptions(){
    city_select.innerHTML = `<option val='-'>-</option>`;
    city_select2.innerHTML = `<option val='-'>-</option>`;
    fetch('http://127.0.0.1:3000/cities')
        .then(resp => resp.json())
        .then(json => {
            createOptionsForCities(json, city_select);
            createOptionsForCities(json, city_select2);
        });
}

function addListenerForAddLink(add_link, div){
    add_link.addEventListener('click', function(event){
        event.preventDefault();
        div.classList.remove('hidden');
    })  
}

function addListenerForHideLink(hide_link, div){
    hide_link.addEventListener('click', function(event){
        event.preventDefault();
        div.classList.add('hidden');
    })
}

function refreshForm(form){
    const inputs = form.querySelectorAll('input');
    for (const input of inputs){
        if (input.type === 'text') input.value = '';
    }
}


//======================= adding a zipcode ================================

const add_zipcode = document.querySelector('#add-zipcode');
const new_zipcode_div = document.querySelector('#new-zipcode-div');
const hide_new_zipcode_form = document.querySelector('#hide-new-zipcode-form');
const new_zipcode_submit = document.querySelector('#new-zipcode-submit');
const new_zipcode_form = new_zipcode_div.querySelector('form');

addListenerForAddLink(add_zipcode, new_zipcode_div);
addListenerForHideLink(hide_new_zipcode_form, new_zipcode_div);

new_zipcode_submit.addEventListener('click', function(event){
    event.preventDefault();

    const zipcode_json = {
        city_id: document.querySelector('#city-select').value,
        digits: new_zipcode_form.querySelector('#digits').value
    }

    configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(zipcode_json)
    }

    fetch('http://127.0.0.1:3000/zipcodes', configObject) 
        .then(resp => resp.json())
        .then(json => {
            console.log(json);
            
            refreshForm(new_zipcode_form);
            updateZipcodeOptions();
        })
})

function updateZipcodeOptions(){
    zipcode_select.innerHTML = `<option val='-'>-</option>`;
    fetch(`http://127.0.0.1:3000/cities/${city_select.value}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json);

            createOptionsForZipcodes(json.zipcodes);
        });
}

// ======================== comparing cities ==============================

const compare_city_link = document.querySelector('#compare-link');
const container2 = document.querySelector('#container2');
const city_select2 = document.querySelector('#city-select2');
const city_info2 = document.querySelector('#city-info2')

compare_city_link.addEventListener('click', function(event){
    event.preventDefault();
    
    toggle_container2();
})

function toggle_container2(){
    if (container2.classList.contains('hidden')) {
        container2.classList.remove('hidden');
    } else {
        container2.classList.add('hidden');
    }
}

city_select2.addEventListener('change', function(){
    if (city_select2.value !== '-') {
        fetch(`http://127.0.0.1:3000/cities/${city_select2.value}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);

                const city = new City(json);

                displayCityInfo(city, city_info2);
            })
    } else {
        makeCityInfoBlank(city_info2);
    }
})