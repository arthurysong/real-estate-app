document.addEventListener('DOMContentLoaded', function(){
    h1 = document.$('h1');
    // h1.innerHTML = 
    fetch('http://127.0.0.1:8080/city/1')
        .then(resp => resp.json())
        .then(json => console.log(json))
})