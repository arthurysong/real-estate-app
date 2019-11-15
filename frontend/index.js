document.addEventListener('DOMContentLoaded', function(){
    // h1 = document.$('h1');
    // h1.innerHTML = 
    h1 = document.querySelector('h1');
    p = document.querySelector('p');
    fetch('http://127.0.0.1:3000/cities/1')
        .then(resp => resp.json())
        .then(json => {
            h1.innerHTML = json.name;
            p.innerHTML = 
                `GDP per capita: ${json.gdp_per_capita}<br>
                job growth in past year: ${json.job_growth_percentage}<br>
                population: ${json.population}<br>
                median price of home: ${json.median_homeprice}`
        });
})